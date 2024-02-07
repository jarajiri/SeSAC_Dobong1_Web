const User = require("../model/User");
// GET /user
exports.user = function (req, res) {
  res.render("user", {
    userInfo: User.userInfo(),
  });
};
