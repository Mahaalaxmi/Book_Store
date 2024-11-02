const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://mahakgm0827:Maha%400827@cluster0.kxyte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("DB Connected");
});
connection.on("error", () => console.log("DB Error"));
module.exports = mongoose;
