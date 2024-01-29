const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
// body-parser 미들 웨어 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/getForm", function (req, res) {
  //   console.log(req.query);
  //   res.send("데이터 받기완료");
  res.render("result", {
    title: "GET",
    userInfo: req.query, //{id:'',email:'',pw:''}
  });
  // res.render("뷰",데이터)
});

app.post("/postForm", function (req, res) {
  // post 요청은 req.body에 담겨져 온다
  console.log(req.body);
  //   res.send("포스트 요청 성공");
  res.render("result", {
    title: "POST",
    userInfo: req.body, //{id:'',password:'',agree:[]}
  });
});

/* 실습 문제 */
app.get("/Prac1", function (req, res) {
  res.render("./practice/practice1.ejs");
});

app.get("/Prac2", function (req, res) {
  res.render("./practice/practice2.ejs");
});

app.get("/getPrac", function (req, res) {
  console.log(req.query);
  res.render("./practice/result.ejs", {
    title: "GET",
    userInfo: req.query,
    addInfo: false,
  });
});

app.post("/postPrac", function (req, res) {
  console.log(req.body);
  const postInfo = req.body;
  res.render("./practice/result.ejs", {
    title: "POST",
    userInfo: postInfo,
    // birth: [req.body.birthYear, req.body.birthMonth, req.body.birthDay],
    addInfo: true,
  });
});

/* validation */
app.post("/js-form-check", (res, req) => {
  // console.log(req.body);
  req.send("validation 응답");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
