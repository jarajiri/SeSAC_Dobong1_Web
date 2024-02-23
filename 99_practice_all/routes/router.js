const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.get("/login", controller.login);

router.get("/register", controller.register);

router.post("/register", controller.postRegister);

router.post("/login", controller.postLogin);

router.get("/profile", controller.profile);

router.patch("/profile", controller.editProfile);

router.delete("/profile", controller.deleteProfile);

router.get("/logout", controller.logout);

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
