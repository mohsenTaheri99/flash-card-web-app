import jwt from "jsonwebtoken"
import mongoose from "mongoose";
type user = {
  username: string;
  password: string;
  date: Date;
  generateAuthToken: () => string;
};
const usersSchema = new mongoose.Schema<user>({
  username: { type: String, require: true },
  password: { type: String, require: true },
  date: { type: Date, default: new Date() },
});

usersSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { username: this.username, _id: this._id },
    "jtwprvetkey"
  );
  return token;
};

export const users = mongoose.model("users", usersSchema);

export async function NewUser(username: string, hash: string) {
  let user = await users.findOne({ username: username });
  if (user) return false;

  user = new users({
    username: username,
    password: hash,
  });
  await user.save();
  const token = user.generateAuthToken();

  return await user.save();
}

export async function getUserByName(username: string) {
  const user = await users.findOne({ username: username });
  if (!user) return false;
  return await user.save();
}

export async function getUserById(id: string) {
  const user = await users.findById({ _id: id });
  if (!user) return false;

  return user;
}

