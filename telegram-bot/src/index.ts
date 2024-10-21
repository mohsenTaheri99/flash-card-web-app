import express, { Request, Response, RequestHandler } from "express";
import { sendMarkup } from "./controller/lib/telegram";

const app = express();
const port = process.env.PORT || 3000;

type InlineKeyboardButton = {
  text: string;
  url?: string;
  callback_data?: string;
};

type ReplyMarkup = {
  inline_keyboard: InlineKeyboardButton[][];
};

type TelegramMessage = {
  chat: {
    id: number;
  };
  // Add other necessary properties
};
type TelegramWebhookBody = {
  message?: TelegramMessage;
  edited_message?: TelegramMessage;
};
// Markup for inline keyboard
const reply_markup: ReplyMarkup = {
  inline_keyboard: [
    [
      {
        text: "Visit My App",
        url: "t.me/flashCardTestbot/gogli",
      },
    ],
  ],
};

app.use(express.json());

app.post("/webhook", (async (req, res) => {
  const message: TelegramMessage | undefined =
    req.body.message || req.body.edited_message;

  if (!message) {
    return res.status(400).send("No message found in the request");
  }

  try {
    const result = await sendMarkup(message, "salam", reply_markup);
    console.log("Message sent successfully:", result);
    res.status(200).send("Message processed");
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send("Error processing message");
  }
}) as RequestHandler);

app
  .listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
  .on("error", (error: Error) => {
    console.error("Error starting server:", error);
  });
