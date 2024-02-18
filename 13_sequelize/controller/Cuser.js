const models = require("../models");

// GET /user
exports.main = (req, res) => {
  res.render("index2");
};

// GET /user/signup
exports.signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
exports.postSignup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.name,
  }).then((result) => {
    console.log("========", result);
    res.send("회원가입 성공");
  });
};

// GET /user/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// POST /user/signin
exports.postSignin = (req, res) => {
  console.log(req.body);
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findOne ========", result);
    if (result != null) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile
exports.profile = (req, res) => {
  console.log(req.body);
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("result.dataValues ===========", result.dataValues);
    result != null ? res.render("profile", result.dataValues) : res.send(false);
  });
};

// POST /user/profile/edit
exports.editProfile = (req, res) => {
  console.log(req.body);
  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { userid: req.body.userid },
    }
  ).then((result) => {
    console.log("update result =======", result);
    result > 0 ? res.send(true) : res.send(false);
  });
};
// POST /user/profile/delete
exports.deleteProfile = (req, res) => {
  console.log(req.body);
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("destory result=========", result);
    result > 0 ? res.send(true) : res.send(false);
  });
};
