const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
/* body-pharser */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", function (req, res) {
  console.log(req.query);
  //   res.send("ajax 응답 완료");
  res.send(req.query);
});
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// axios 라우팅
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// fetch 라우팅
app.get("/fetch", function (req, res) {
  console.log(req.query);
  //   res.send("fetch 응답 완료");
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// open-api
app.get("/open-api", function (req, res) {
  res.render("api");
});

// 실습1
app.get("/prac", function (req, res) {
  res.render("../practice/practice1");
});

app.get("/getPrac", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});
// 실습2
app.get("/prac2", function (req, res) {
  res.render("../practice/practice2");
});

app.post("/prac2", function (req, res) {
  res.send({
    id: "eic2021",
    pw: "1234",
  });
});
app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
