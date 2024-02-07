const User = require("../model/User");

exports.login = (req, res) => {
  res.render("login");
};

exports.loginPost = (req, res) => {
  console.log(req.body.id);
  console.log(req.body.pw);
  console.log(User.userInfo().id);
  console.log(User.userInfo().pw);
  if (User.userInfo().id === req.body.id && User.userInfo().pw === req.body.pw) {
    res.send("로그인 성공");
  } else {
    res.send("로그인 실패");
  }
};
