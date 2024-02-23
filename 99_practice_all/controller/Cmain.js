const models = require("../models");
const { userModel } = require("../models");

// get /
exports.main = (req, res) => {
  res.render("index");
};
// get /login
exports.login = (req, res) => {
  if (req.session.nid) {
    return res.redirect("/profile");
  }
  res.render("login");
};
// get /register
exports.register = (req, res) => {
  res.render("register");
};
// post /register
exports.postRegister = async (req, res) => {
  console.log(req.body);
  try {
    const { userid, pw, name } = req.body;
    const newUser = await userModel.create({ name, userid, pw });
    console.log(newUser);
    res.send(newUser);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};

// post /login
exports.postLogin = async (req, res) => {
  console.log(req.body);
  const { userid, pw } = req.body;
  try {
    const findOneUser = await userModel.findOne({
      where: { userid: userid },
    });
    if (findOneUser.userid === userid && findOneUser.pw === pw) {
      req.session.nid = findOneUser.id;
      console.log(req.session.nid);
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.log("db 조회 에러", error);
    res.status(500).send("서버 에러");
  }
};

// get /profile
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
    // console.log(findOneProfile);
    if (findOneProfile) {
      res.render("profile", {
        id: findOneProfile.nid,
        pw: findOneProfile.pw,
        userid: findOneProfile.userid,
        name: findOneProfile.name,
      });
    }
  } catch (error) {
    console.log("db 조회 에러", error);
    res.status(500).send("서버 에러");
  }
};

/* exports.editProfile = async (req, res) => {
  const { id, pw, name } = req.body;
  if (req.session.id) {
    try {
      const updateProfile = userModel.update(
        { name, pw },
        {
          where: {
            id: req.session.id,
          },
        }
      );
      console.log(updateProfile);
      res.send("수정 완료");
    } catch (error) {
      console.log("db 조회 에러", error);
      res.status(500).send("서버 에러");
    }
  } else {
    // 세션값 없을때 (로그인 안한 상태)
    alert("세션 만료");
    res.redirect("/login");
  }
};
 */
//   //파라미터 값이 문자열일 경우 예외처리
//   //   if (isNaN(req.param.id) || req.params.id < 0) {
//   //     return res.render("404");
//   //   }
