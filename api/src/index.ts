import express from "express";
import mongoose from "mongoose";
import { users } from "./models/users";
const port = process.env.PORT || 3000;
const app = express();

mongoose
  .connect("mongodb://mohsen:example@mongo:27017/mydatabase?authSource=admin")
  .then(() => console.log("succesfully connected to database"))
  .catch((e) => console.log(e));

app.get("/api/", (req, res) => {
  res.send("<h1>nice i thing it's 1working</h1>");
});
app.get("/api/users", async(req, res) => {
  const allUsers = await users.find()
  res.send(allUsers);
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
