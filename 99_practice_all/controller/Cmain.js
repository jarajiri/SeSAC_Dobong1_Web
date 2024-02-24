const models = require("../models");
const { userModel } = require("../models");
const { hashPw, comparePw } = require("../utils/bcrypt");

// GET /
exports.main = (req, res) => {
  console.log(req.session.nid);

  if (req.session.nid) {
    res.render("index", { isLogin: true });
  } else {
    res.render("index", { isLogin: false });
  }
};
// GET /login
exports.login = (req, res) => {
  // 세션 가져오기
  if (req.session.nid) {
    return res.redirect("/profile");
  }
  res.render("login");
};

// GET /register
exports.register = (req, res) => {
  res.render("register");
};

// POST /register
exports.postRegister = async (req, res) => {
  console.log(req.body);
  try {
    const { userid, pw, name } = req.body;
    const newUser = await userModel.create({ name, userid, pw: hashPw(pw) });
    newUser ? res.send(true) : res.send(false);
  } catch (error) {
    console.log("postRegister error::::", error);
    res.status(500).send("server error");
  }
};

// POST /login
exports.postLogin = async (req, res) => {
  console.log(req.body);
  const { userid, pw } = req.body;
  try {
    const User = await userModel.findOne({
      where: { userid },
    });
    if (comparePw(pw, User.pw)) {
      req.session.nid = User.id;
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.log("postLogin error::::", error);
    res.status(500).send("server error");
  }
};

// GET /profile
exports.profile = async (req, res) => {
  console.log(req.session.nid);
  if (!req.session.nid) {
    return res.redirect("/login");
  }
  try {
    const findOneProfile = await userModel.findOne({
      where: {
        id: req.session.nid,
      },
    });
    console.log("findOneProfile::::", findOneProfile);
    res.render("profile", {
      id: findOneProfile.id,
      pw: "",
      userid: findOneProfile.userid,
      name: findOneProfile.name,
    });
  } catch (error) {
    console.log("profile error::::", error);
    res.status(500).send("server error");
  }
};

// PATCH /profile
exports.editProfile = async (req, res) => {
  console.log(req.body);
  const { id, pw, name } = req.body;

  if (!req.session.nid) {
    return res.redirect("/login");
  }
  try {
    const updateProfile = await userModel.update(
      { name, pw: hashPw(pw) },
      {
        where: { id },
      }
    );
    console.log("updateProfile::::", updateProfile);
    updateProfile > 0 ? res.send(true) : res.send(false);
  } catch (error) {
    console.log("updateProfile error::::", error);
    res.status(500).send("server error");
  }
};

// DELETE /profile
exports.deleteProfile = async (req, res) => {
  console.log(req.body);
  const { id, pw } = req.body;

  if (!req.session.nid) {
    return res.redirect("/login");
  }
  try {
    const findUser = await userModel.findOne({
      where: { id },
    });
    console.log(comparePw(pw, findUser.pw));
    if (comparePw(pw, findUser.pw)) {
      await userModel.destroy({
        where: { id },
      });
      req.session.destroy((err) => {
        if (err) throw err;
      });
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.log("deleteProfile error::::", error);
    res.status(500).send("server error");
  }
};

// GET /logout
exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
  });
  res.redirect("/");
};
