import { Router, Request, Response } from "express";
import {
  getShelfById,
  createShelf,
  getBooksByShelfId,
  addFlashCardsToBook,
  createBookAndAddToShelf,
  getBookById,
} from "../services/selfs.services";
import { CreateNewUser, getUserByTelegramId } from "../services/users.services";
import { telegramUser } from "../middlewares/telegram-auth";
const router = Router();

router.get("/initData", async (req: Request, res: Response) => {
  const telegramUser: telegramUser = req.body.user;
  const user = await getUserByTelegramId(telegramUser.id);
  try {
    if (user) {
      res.send(JSON.stringify(user));
      return;
    }
    const newUser = await CreateNewUser({
      telegramId: telegramUser.id,
      username: telegramUser.username,
    });
    res.send(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify("something went wrong"));
  }
});

router.get("/shelf/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const shelf = await getShelfById(id);
    if (!shelf) {
      res.status(404).send(JSON.stringify("shelf not found"));
      return;
    }
    res.send(JSON.stringify(shelf));
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify("something went wrong"));
  }
});

router.post("/create-shelf", async (req: Request, res: Response) => {
  const { title } = req.body;
  const telegramUser: telegramUser = req.body.user;
  try {
    const shelf = await createShelf({ title, telegramId: telegramUser.id });
    res.send(JSON.stringify(shelf));
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify("something went wrong"));
  }
});

router.get("/books-of-shelf/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send(JSON.stringify("id is required"));
    return;
  }
  try {
    const books = await getBooksByShelfId(id);
    res.send(JSON.stringify(books));
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify("something went wrong"));
  }
});

router.post(
  "/create-book-and-add-to-shelf",
  async (req: Request, res: Response) => {
    const { book, shelfId } = req.body;
    const telegramUser: telegramUser = req.body.user;
    try {
      const newBook = await createBookAndAddToShelf(
        book,
        shelfId,
        telegramUser.id
      );
      res.send(JSON.stringify(newBook));
    } catch (error) {
      console.log(error);
      res.status(500).send(JSON.stringify("something went wrong"));
    }
  }
);

router.post("/add-flashcard-to-book", async (req: Request, res: Response) => {
  const { bookId, flashcard } = req.body;
  try {
    const book = await addFlashCardsToBook(bookId, flashcard);
    res.send(JSON.stringify(book));
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify("something went wrong"));
  }
});

router.get("/book/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await getBookById(id);
  if (!book) {
    res.status(404).send(JSON.stringify("book not found"));
    return;
  }
  res.send(JSON.stringify(book));
});

router.get("*", (req: Request, res: Response) => {
  res.status(404).send(JSON.stringify("this flashcard route not found"));
});
router.post("*", (req: Request, res: Response) => {
  res.status(404).send(JSON.stringify("this flashcard route not found"));
});
export default router;
