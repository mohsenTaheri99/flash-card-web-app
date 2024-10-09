import { Router, Request, Response } from "express";
import { CreateNewUser, getUserByName } from "../services/users.services";
import { checkPassword, gethash } from "../utils/bcrypt";

const router = Router();

type AuthRequestBody = {
  username: string;
  password: string;
};

router.post(
  "/register",
  async (req: Request<{}, {}, AuthRequestBody>, res: Response) => {
    const { username, password } = req.body;
    const hash = await gethash(password);
    const { token, user, err } = await CreateNewUser(username, hash);
    if (err) {
      res.status(400).send(JSON.stringify({ err: "not avaleble username" }));
      return;
    }

    res.setHeader("Set-Cookie", `token=${token}; HttpOnly;path=/`);
    res.send(JSON.stringify({ message: "login" }));
  }
);
router.post(
  "/login",
  async (req: Request<{}, {}, AuthRequestBody>, res: Response) => {
    const { username, password } = req.body;
    const user = await getUserByName(username);
    if (!user) {
      res
        .status(403)
        .send(JSON.stringify({ err: "invalid username or password" }));
      return;
    }
    const isMach = await checkPassword({ hash: user.hash, password: password });
    console.log(isMach);
    if (isMach) {
      const token = user.generateAuthToken();
      res.setHeader("Set-Cookie", `token=${token}; HttpOnly;path=/`);
      res.send(JSON.stringify({ message: "login" }));
    } else {
      res
        .status(403)
        .send(JSON.stringify({ err: "username or password incorrect" }));
    }
  }
);

export default router;
