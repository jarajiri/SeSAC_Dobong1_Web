const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// GET /
router.get("/", controller.main);
// GET /login
router.get("/login", controller.login);
// GET /register
router.get("/register", controller.register);
// POST /register
router.post("/register", controller.postRegister);
// POST /login
router.post("/login", controller.postLogin);
// GET /profile
router.get("/profile", controller.profile);
// PATCH /profile
router.patch("/profile", controller.editProfile);
// DELETE /profile
router.delete("/profile", controller.deleteProfile);
// GET /logout
router.get("/logout", controller.logout);

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
