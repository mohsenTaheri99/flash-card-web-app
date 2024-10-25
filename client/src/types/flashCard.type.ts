export type User = {
  telegramId: number;
  username?: string;
  hash?: string;
  date: Date;
  _id: string;
  __v: number;
  shelfs: Shelf[];
};

export type Shelf = {
  title?: string;
  authorId?: string;
  books?: Book[];
  date?: Date;
  _id: string;
  __v?: number;
};
export type Book = {
  title: string;
  authorId: string;
  flashcards: FlashCard[];
  _id: string;
  date: Date;
  __v: number;
};
export type FlashCard = {
  question: string;
  answer: string;
  _id: string;
};
