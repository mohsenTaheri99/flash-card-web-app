import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export type user = {
  username: string;
  hash: string;
  date: Date;
  generateAuthToken: () => string;
};
const usersSchema = new mongoose.Schema<user>({
  username: { type: String, require: true },
  hash: { type: String, require: true },
  date: { type: Date, default: new Date() },
});

usersSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { username: this.username, _id: this._id },
    //chenge this later
    "jtwprvetkey"
  );
  return token;
};

export const users = mongoose.model("users", usersSchema);
