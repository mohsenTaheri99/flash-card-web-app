import mongoose from "mongoose";
import { user, users } from "../models/users";

export const CreateNewUser = async (telegramUser: {
  telegramId: number;
  username?: string;
}): Promise<user> => {
  let user = await users.findOne({ telegramId: telegramUser.telegramId });
  if (user) throw new Error("User already exists");
  user = new users({
    telegramId: telegramUser.telegramId,
    username: telegramUser.username,
  });
  await user.save();

  return user;
};
export const findUserByTelegramId = async (
  telegramId: number
): Promise<user | null> => {
  const user = await users.findOne({ telegramId: telegramId });
  if (!user) return null;
  return user;
};
export const getUserByName = async (username: string): Promise<user | null> => {
  const user = await users.findOne({ username: username });
  if (!user) return null;
  return user;
};

export const getUserById = async (id: string): Promise<user | null> => {
  const user = await users.findById(id);
  if (!user) {
    return null;
  }
  return user;
};

export const getUserByTelegramId = async (
  telegramId: number
): Promise<user | null> => {
  const user = await users.findOne({ telegramId: telegramId });
  if (!user) {
    return null;
  }
  return user;
};

export const addShelfToUser = async (
  telegramId: number,
  shelfId: mongoose.Schema.Types.ObjectId
): Promise<user> => {
  const user = await users.findOne({ telegramId: telegramId });
  if (!user)
    throw new Error("User not found while attempting to add shelf to user");
  user.shelfs.push(shelfId);
  await user.save();
  return user;
};
export const removeShelfFromUser = async (
  telegramId: number,
  shelfId: mongoose.Schema.Types.ObjectId
): Promise<void> => {
  const user = await users.findOne({ telegramId: telegramId });
  if (!user)
    throw new Error(
      "User not found. Cannot remove shelf from a non-existent user."
    );
  user.shelfs = user.shelfs.filter(
    (id) => id.toString() !== shelfId.toString()
  );
  await user.save();
};
