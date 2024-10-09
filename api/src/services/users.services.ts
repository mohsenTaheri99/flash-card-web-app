import { user, users } from "../models/users";

type CreateNewUserRrturn = {
  user: user | null;
  token: string | null;
  err: boolean;
};
export const CreateNewUser = async (
  username: string,
  hash: string
): Promise<CreateNewUserRrturn> => {
  let user = await users.findOne({ username: username });
  if (user) return { err: true, user: null, token: null };

  user = new users({
    username: username,
    hash: hash,
  });
  await user.save();
  const token = user.generateAuthToken();

  return { err: false, user: user, token: token };
};

export const getUserByName = async (
  username: string
): Promise<user | false> => {
  const user = await users.findOne({ username: username });
  if (!user) return false;
  return user;
};

export const getUserById = async (id: string): Promise<user | boolean> => {
  const user = await users.findById({ _id: id });
  if (!user) return false;

  return user;
};
