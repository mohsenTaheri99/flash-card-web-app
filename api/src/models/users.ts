import mongoose from "mongoose";
export type user = {
  telegramId: number;
  username?: string;
  hash?: string;
  date: Date;
  _id: mongoose.Schema.Types.ObjectId;
  __v: number;
  shelfs: mongoose.Schema.Types.ObjectId[];
  // generateAuthToken: () => string;
};
const usersSchema = new mongoose.Schema<user>({
  telegramId: { type: Number, required: true },
  username: { type: String },
  hash: { type: String },
  date: { type: Date, default: new Date() },
  shelfs: [{ type: mongoose.Schema.Types.ObjectId, ref: "shelfs" }],
});

// usersSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign(
//     { username: this.username, _id: this._id },
//     //chenge this later
//     "jtwprvetkey"
//   );
//   return token;
// };

export const users = mongoose.model("users", usersSchema);
