const express = require("express");
const app = express();
const PORT = 8085;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//임시 DB
const comments = [
  {
    id: 1,
    userid: "apple",
    date: "2022-10-31",
    comment: "동해물과",
  },
  {
    id: 2,
    userid: "banana",
    date: "2022-02-31",
    comment: "백두산이",
  },
  {
    id: 3,
    userid: "cocoa",
    date: "2022-03-31",
    comment: "마르고",
  },
  {
    id: 4,
    userid: "donut",
    date: "2022-04-31",
    comment: "닳도록",
  },
];

const indexRouter = require("./routes/index");
//
// 라우터 파일이 index.js 라면 require('./routes')로 사용가능
app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function (req, res) {
  console.log("server open");
});
