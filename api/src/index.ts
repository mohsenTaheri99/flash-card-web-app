import mongoose from "mongoose";
import app from "./app";
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://mohsen:example@mongo:27017/mydatabase?authSource=admin")
  .then(() => console.log("succesfully connected to database"))
  .catch((e) => console.log(e));

app.listen(port, () => {
  console.log("listening on port ", port);
});
