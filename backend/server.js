const express = require("express");
const app = express();
require("dotenv").config();

// app.get("/", (req, res) => {
//   res.send("Hello From backend site");
// });

//creating Port
app.listen(process.env.PORT, () => {
  console.log(`Server Started at port ${process.env.PORT}`);
});
