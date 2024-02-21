const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

// 쿠키 미들웨어
// ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser());

// ver2. 암호화된 쿠키
app.use(cookieParser("secretKey"));

const cookieConfig = {
  /*
    쿠키 옵션 종류
    - maxAge : 쿠키의 수명, 1000 = 1ms
    - expires : 만료날짜 GMT 시간 설정 (21 Feb 2024 /12:00 GMT)
    - httpOnly : http 통신만 접근 허용, true/false
    - path : '/abc' //쿠키가 해당 경로와 그 하위 경로에서만 활성화
             default : '/'
    - secure : https로 통신시에만 쿠키 전송, true/false
    - signed : 쿠키의 암호화 설정 true/false
    */
  maxAge: 60 * 1000,
  httpOnly: true,
  signed: true, // 미들웨어 설정 필요
};

app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정
// res.cookie(쿠키이름,쿠키값,옵션)
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~", cookieConfig);
  res.end();
});

// 쿠키 가져오기
// req.cookies 쿠키 정보가 담겨있음
app.get("/getCookie", (req, res) => {
  //   console.log(req.cookies); // ver1. 암호화 되지 않은 쿠키일 때
  //   res.send(req.cookies);
  console.log(req.signedCookies); // ver2. 암호화된 쿠키
  res.send(req.signedCookies);
});

// 쿠키 삭제
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~~", cookieConfig);
  //res.cookie 로 설정했던 인자와 똑같이 써줘야 찾아서 지울 수 있다.
  res.send("쿠키 삭제");
});

const cookieConfig2 = {
  maxAge: 60 * 1000,
  httpOnly: true,
  path: "/abc",
};

app.get("/abc", (req, res) => {
  res.cookie("abc", "another cookie~~", cookieConfig2);
  res.render("abc");
});

app.listen(8080, () => {
  console.log("server open");
});

/* 
ver1. 암호화 X
- 미들웨어 설정 >> app.use(cookieParser())
- 쿠키 설정 >> res.cookie(이름, 값, 옵션)
- 쿠키 확인 >> res.cookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)
    - 쿠키 삭제만 하는 것이고 응답 완료까지는 하지 않음
    - 이름, 값, 옵션이 일치해야 삭제된다
    - (expires, maxAge) 옵션은 일치하지 않아도 됨

ver2. 암호화 O
- 미들웨어 설정 >> app.use(cookieParser('암호화에 사용될 문자열'))
    - 문자열은 개발자가 임의로 지정
- 쿠키 설정 >> res.cookie 설정 및 signed 옵션 true로 설정
- 쿠키 확인 >> res.signedCookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)

*/
