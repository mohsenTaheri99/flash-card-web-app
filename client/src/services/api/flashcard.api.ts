import axiosInstance from "../../utils/axios";
// Schema model types
// These types represent the data structures used in the API
type User = {
  telegramId: number;
  username?: string;
  hash?: string;
  date: Date;
  _id: string;
  __v: number;
  shelfs: string[];
};

type Shelf = {
  title: string;
  authorId: string;
  books: string[];
  date: Date;
  _id: string;
  __v: number;
};
// type book = {
//   title: string;
//   authorId: string;
//   flashcards: FlashCard[];
//   _id: string;
//   date: Date;
//   __v: number;
// };
// type FlashCard = {
//   question: string;
//   answer: string;
//   _id: string;
// };

export async function getInitData() {
  const response = await axiosInstance.get("/flashcard/initData");
  if (response.status !== 200) throw new Error("Failed to get init data");
  return response.data as User;
}
export async function getShelfById(shelfId: string) {
  const response = await axiosInstance.get(`/flashcard/shelf/${shelfId}`);
  if (response.status !== 200) throw new Error("Failed to get shelf");
  return response.data as Shelf;
}
