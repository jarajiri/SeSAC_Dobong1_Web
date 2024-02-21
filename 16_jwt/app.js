const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
// jwt 시크릿 키
const SECRET = "yXuhoDtTY8pjLgsKlVOEjWEV2HWR1J"; //랜덤 문자열
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "eic2021", pw: "1234", name: "김성민", age: "20" };

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res) => {
  try {
    //   console.log(req.body);
    //   res.send(req.body);
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // jwt 인증 토큰 생성
      // const token = jwt.sign(payload, secret/privateKey, option)
      const token = jwt.sign({ id: id }, SECRET);
      console.log(token);
      res.send({ result: true, token: token });
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log("POST /login", error);
    res.status(500).send("server error");
  }
});

// 토큰 정보 확인 요청
app.post("/token", (req, res) => {});

app.listen(8080, () => {
  console.log("server open");
});
