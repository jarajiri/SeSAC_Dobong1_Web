// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};
exports.signin = (req, res) => {
  res.render("signin");
};
exports.postSignin = (req, res) => {
  console.log(req.body);
  User.getOneUser(req.body, (result) => {
    // console.log(result);
    if (result != null) res.render("profile");
  });
};
