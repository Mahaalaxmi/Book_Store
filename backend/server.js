require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
const user = require("./routes/user");
const books = require("./routes/book");
// app.get("/", (req, res) => {
//   res.send("Hello From backend site");
// });;

app.use(cors());
app.use(express.json());
app.use("/users", user);
app.use("/books", books);

app.get("/", (req, res) => {
  res.status(200).json("Welcome");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running in : ${process.env.PORT}`);
});
