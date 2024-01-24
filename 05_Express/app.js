const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("hello express!!! 익스프레스");
  res.render("index.ejs", {
    // render의 두번째 매개변수에서 indes.ejs에서 사용할 변수 전달
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "rime",
      msg: "집에 가고싶다",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
