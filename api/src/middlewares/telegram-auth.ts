import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not defined in environment variables");
}

export const verifyTelegramWebAppData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const initData = req.headers["x-telegram-init-data"] as string;

  if (!initData) {
    return res.status(401).json({ error: "Telegram init data is missing" });
  }

  const initDataParams = new URLSearchParams(initData);
  const hash = initDataParams.get("hash");
  initDataParams.delete("hash");

  const dataCheckString = Array.from(initDataParams.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(BOT_TOKEN)
    .digest();
  const calculatedHash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  if (calculatedHash !== hash) {
    return res.status(401).json({ error: "Invalid Telegram init data" });
  }

  // Extract user information
  const userData = JSON.parse(initDataParams.get("user") || "{}");

  // Attach user info to req.user
  if (!userData.id) throw new Error("User id is missing");
  req.body.user = {
    id: userData.id,
    first_name: userData.first_name,
    last_name: userData.last_name,
    username: userData.username,
    language_code: userData.language_code,
  };

  next();
};
export interface telegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}
