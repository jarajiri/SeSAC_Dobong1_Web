const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter);
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, (req, res) => {
  console.log("server open");
});
