// TODO: 컨트롤러 코드
const User = require("../model/User");

// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signup
exports.signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입 요청
exports.postSignup = (req, res) => {
  console.log("controller", req.body);
  User.insertUser(req.body, (result) => {
    if (result != null) {
      console.log(result); // true / false
      res.send(result);
    } else {
      res.send(false);
    }
  });
};

// GET /user/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// POST /user/signin
// 로그인 요청
exports.postSignin = (req, res) => {
  console.log(req.body);
  User.getOneUser(req.body, (result) => {
    // console.log(result);
    if (result != null) {
      console.log(result);
      res.send(result);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile
exports.profile = (req, res) => {
  console.log(req.body);
  User.getOneUserByUserId(req.body, (result) => {
    console.log(result);
    // if (result != null) {
    //   res.render("profile", result);
    // } else {
    //   res.send(false);
    // }
    result != null ? res.render("profile", result) : res.send(false);
  });
};
// POST /user/profile/edit
// 유저 정보 수정
exports.editProfile = (req, res) => {
  console.log(req.body);
  User.editUser(req.body, (result) => {
    console.log(result);
    if (result != null) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};
// POST /user/profile/delete
// 유저 정보 삭제
exports.deleteProfile = (req, res) => {
  console.log(req.body);
  User.deleteUser(req.body, (result) => {
    console.log(result);
    if (result != null) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};
