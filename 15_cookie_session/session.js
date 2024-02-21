const express = require("express");
const session = require("express-session");
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

// 세션 미들웨어 설정
const sessionConfig = {
  /* 
-secret : 안전한 쿠키 전송을 위한 서명값 (필수)
-resave : 세션 수정사항 생기지 않더라도 매 요청마다 세션을 다시 저장할지 (false 권장)
-saveUnintialized : 세션에 저장할 내용이 없더라도 처음부터 세션을 생성할지 (false 권장)
-cookie : 세션 쿠키에 대한 설정 (cookieConfig 참고)
-secure : https에 대한 세션을 주고 받을지 (true,false)
-name : 세션쿠키의 이름 (default connect.sid)
*/
  secret: "secretKey",
  resave: false,
  saveUnintialized: false,
  cookie: {
    httpOnly: true,
  },
  //   secure: false,
};
app.use(session(sessionConfig));

app.get("/", (req, res) => {
  res.render("session");
});

// 세션 설정하기
app.get("/set", (req, res) => {
  // req.session.키이름="값"
  req.session.name = "eic2021";
  res.send("세션 설정 완료");
});

// 세션 확인하기
app.get("/name", (req, res) => {
  console.log(req.sessionID);
  //   9k-7vxFMnq0HfHabbnCzkT-UyA6FTvU2
  //세션 정보 확인
  console.log(req.session);
  //   Session {
  //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
  //     name: 'eic2021'
  //   }
  console.log(req.session.name);
  // eic2021
  //   res.send("서버에서 확인됨");
  res.json({ id: req.sessionID, name: req.session.name });
});

// 세션 삭제하기
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("server error");
      throw err;
    }
    res.send("세션 삭제 완료");
  });
});

app.listen(8080, () => {
  console.log("server open");
});
