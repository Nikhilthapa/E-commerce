const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("../src/controller/Router/user")); //user Routes
app.use("/", require("../src/controller/Router/seller")); // seller Router
app.get("/", (req, res) => {
  res.status(200).json({ message: "ping........." });
});

module.exports = app;
