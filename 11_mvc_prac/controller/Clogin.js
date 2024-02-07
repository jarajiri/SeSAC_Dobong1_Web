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
    res.render("로그인 성공");
  } else {
    res.send("로그인 실패");
  }
};
exports.user = (req, res) => {
  console.log(User.user);
  const userList = User.user.split("\n");
  const userInfo = [
    {
      id: userList[0].split("//")[0],
      pw: userList[0].split("//")[1],
      content: userList[0].split("//")[2],
    },
    {
      id: userList[1].split("//")[0],
      pw: userList[1].split("//")[1],
      content: userList[1].split("//")[2],
    },
    {
      id: userList[2].split("//")[0],
      pw: userList[2].split("//")[1],
      content: userList[2].split("//")[2],
    },
  ];
  console.log(userInfo);
  let isSigned = false;
  userInfo.forEach((e) => {
    if (e.id === req.body.id && e.pw === req.body.pw) {
      isSigned = true;
    }
  });
  if (isSigned) {
    return res.send(req.body.id + " 님 환영합니다.");
  }
  return res.send("아이디 또는 비밀번호를 잘못 입력했습니다.");
};
