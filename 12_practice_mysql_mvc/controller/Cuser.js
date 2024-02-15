// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};
exports.signup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  User.insertUser(req.body, (result) => {
    if (result != null) {
      console.log(result);
      res.send(result);
    } else {
      res.send(false);
    }
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};
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
exports.profile = (req, res) => {
  console.log(req.body);
  User.getOneUserByUserId(req.body, (result) => {
    console.log(result);
    if (result != null) {
      res.render("profile", result);
    } else {
      res.send(false);
    }
  });
};

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
