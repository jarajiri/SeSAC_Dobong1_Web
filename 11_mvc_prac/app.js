const express = require("express");
const app = express();
const PORT = 8085;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

app.listen(PORT, function (req, res) {
  console.log("server open");
});
