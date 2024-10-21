import { AxiosResponse } from "axios";
import axiosInstance from "./axios.js";

type ChatInfo = {
  id: number;
};

type MessageObject = {
  chat: ChatInfo;
};

type ReplyMarkup = {
  [key: string]: any;
};

export function sendMessage(
  messageObj: MessageObject,
  messageText: string
): Promise<AxiosResponse> {
  if (!messageObj?.chat?.id) {
    return Promise.reject(new Error("Invalid message object"));
  }

  return axiosInstance.post("sendMessage", {
    chat_id: messageObj.chat.id,
    text: messageText,
  });
}

export function sendMarkup(
  messageObj: MessageObject,
  messageText: string,
  replyMarkup: ReplyMarkup
): Promise<AxiosResponse> {
  if (!messageObj?.chat?.id) {
    return Promise.reject(new Error("Invalid message object"));
  }

  return axiosInstance.post("sendMessage", {
    chat_id: messageObj.chat.id,
    text: messageText,
    reply_markup: JSON.stringify(replyMarkup),
  });
}
