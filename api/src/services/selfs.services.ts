import mongoose from "mongoose";
import { flashcard } from "../models/shelf";
import { shelfs, shelf, book, books } from "../models/shelf";
import { addShelfToUser, findUserByTelegramId } from "./users.services";

export const deleteShelf = async (id: string): Promise<void> => {
  const shelf = await shelfs.findById({ _id: id });
  if (!shelf) throw new Error("can not delete non-existent shelf");
  await shelfs.deleteOne({ _id: id });
};

export const createShelf = async ({
  title,
  telegramId,
}: {
  title: string;
  telegramId: number;
}): Promise<shelf> => {
  const shelf = new shelfs({ title, authorId: telegramId });
  const user = await addShelfToUser(telegramId, shelf._id);
  shelf.authorId = user._id;
  await shelf.save();
  return shelf;
};

export const getShelfById = async (id: string): Promise<shelf | null> => {
  if (typeof id !== "string") throw new Error("Invalid id");
  const shelf = await shelfs.findById({ _id: id });
  if (!shelf) return null;
  return shelf;
};

export const addNewBookToShelf = async (
  id: string,
  bookId: mongoose.Schema.Types.ObjectId
): Promise<shelf | null> => {
  const shelf = await shelfs.findById({ _id: id });
  if (!shelf) return null;
  shelf.books.push(bookId);
  await shelf.save();
  return shelf;
};

export const createBook = async (book: book): Promise<book> => {
  const newBook = await books.create(book);
  return newBook;
};

export const addFlashCardsToBook = async (
  bookId: mongoose.Schema.Types.ObjectId,
  flashCards: flashcard[]
): Promise<book | null> => {
  const book = await books.findById({ _id: bookId });
  if (!book) return null;
  book.flashcards.push(...flashCards);
  await book.save();
  return book;
};
export const getBooksByShelfId = async (id: string): Promise<book[] | null> => {
  const shelf = await shelfs.findById({ _id: id });
  if (!shelf) return null;
  const shelfSBook = await books.find({ _id: { $in: shelf.books } });
  return shelfSBook;
};
export const createBookAndAddToShelf = async (
  book: book,
  shelfId: string,
  telegramId: number
): Promise<book> => {
  const user = await findUserByTelegramId(telegramId);
  if (!user)
    throw new Error(
      "create book failed,can not find a user with this telegram id"
    );
  const newBook = new books({ ...book, authorId: user._id });
  await addNewBookToShelf(shelfId, newBook._id);
  await newBook.save();
  return newBook;
};

export const getBookById = async (id: string): Promise<book | null> => {
  const book = await books.findById({ _id: id });
  if (!book) return null;
  return book;
};
