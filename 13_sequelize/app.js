const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
app.use("/", indexRouter);
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  console.log(result);
  console.log("db 연결 성공!!");
});

app.listen(PORT, (req, res) => {
  console.log("server open");
});
