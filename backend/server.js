require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");
// app.get("/", (req, res) => {
//   res.send("Hello From backend site");
// });;

app.use(cors());
app.use(express.json());
app.use("/users", User);
app.use("/books", Books);
app.use("/fav", Favourite);
app.use("/cart", Cart);
app.use("/order", Order);

app.get("/", (req, res) => {
  res.status(200).json("Welcome");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running in : ${process.env.PORT}`);
});
