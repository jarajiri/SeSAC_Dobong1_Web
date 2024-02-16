// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const ctr = require("../controller/Cuser");

// GET /user
router.get("/", ctr.main);
// GET /user/signup
router.get("/signup", ctr.signup);
// POST /user/signup
router.post("/signup", ctr.postSignup);
// GET /user/signin
router.get("/signin", ctr.signin);
// POST /user/signin
router.post("/signin", ctr.postSignin);
// POST /user/profile
router.post("/profile", ctr.profile);
// PATCH /user/profile/edit
router.patch("/profile/edit", ctr.editProfile);
// DELETE /user/profile/delete
router.delete("/profile/delete", ctr.deleteProfile);

module.exports = router;
