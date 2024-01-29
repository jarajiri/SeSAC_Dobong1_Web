const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
