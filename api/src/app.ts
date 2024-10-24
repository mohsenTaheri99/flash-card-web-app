import express from "express";

import flashCard from "./routes/flashCard";
import { verifyTelegramWebAppData } from "./middlewares/telegram-auth";
const app = express();
app.use(express.json());
app.use(
  "/api/flashcard",
  verifyTelegramWebAppData as express.RequestHandler,
  flashCard
);

export default app;
