const express = require("express");
const app = express();
const session = require("express-session");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TODO: 세션 설정

//로그인 정보
const userInfo = { userId: "cocoa", userPw: "1234" };
const sessionConfig = {
  secret: "hahaha",
  resave: false,
  saveUnintialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24,
    signed: true,
  },
};

app.use(session(sessionConfig));

// 2. index에 세션 정보 전달
app.get("/", (req, res) => {
  /* 
    로그인된 유저라면 {isLogin:true, user:user}
    로그인 안된 유저라면 {isLogin:false}
*/
  //TODO: user session 불러오는 부분
  //user가 로그인 유무 검사하는 부분
  // 로그인된 유저라면 값이 있고 아니면 undefined
  if (req.session.user) {
    res.render("index", { isLogin: true, user: req.session.user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

//TODO: 로그인 기능
// 1. 세션 설정
app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  if (id === userInfo.userId && pw === userInfo.userPw) {
    req.session.user = id;
    res.redirect("/");
  } else {
    res.send(`
    <script>
        alert('아이디 비밀번호 확인')
        document.location.href='/login'
    </script>
    `);
  }
});

//TODO: 로그아웃 기능
// 3. 세션 삭제
app.get("/logout", (req, res) => {
  //로그아웃 진행
  //메인 페이지 렌더링 (redirect)
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("server error");
      throw err;
    } else {
      res.send(`
        <script>
            alert('로그아웃')
            document.location.href='/login'
        </script>
        `);
    }
  });
});

app.listen(8080, () => {
  console.log("server open");
});
