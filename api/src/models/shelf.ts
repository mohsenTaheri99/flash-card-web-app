import mongoose from "mongoose";
export type flashcard = {
  question: string;
  answer: string;
  _id: mongoose.Schema.Types.ObjectId;
};
export type book = {
  title: string;
  authorId: mongoose.Schema.Types.ObjectId;
  flashcards: flashcard[];
  _id: mongoose.Schema.Types.ObjectId;
  date: Date;
  __v: number;
};
export type shelf = {
  title: string;
  authorId: mongoose.Schema.Types.ObjectId;
  books: mongoose.Schema.Types.ObjectId[];
  date: Date;
  _id: mongoose.Schema.Types.ObjectId;
  __v: number;
};
const flashcardSchema = new mongoose.Schema<flashcard>({
  question: { type: String, require: true },
  answer: { type: String, require: true },
});
const bookSchema = new mongoose.Schema<book>({
  title: { type: String, require: true },
  authorId: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
  flashcards: [flashcardSchema],
  date: { type: Date, default: new Date() },
});
const shelfsSchema = new mongoose.Schema<shelf>({
  title: { type: String, require: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
  date: { type: Date, default: new Date() },
});

export const shelfs = mongoose.model("shelfs", shelfsSchema);
export const books = mongoose.model("books", bookSchema);
