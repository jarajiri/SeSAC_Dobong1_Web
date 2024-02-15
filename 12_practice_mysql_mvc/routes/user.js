// TODO: 라우트 설정
const express = require("express");
const router = express.Router();

const ctr = require("../controller/Cuser");

router.get("/", ctr.main);
router.get("/signup", ctr.signup);
router.post("/signup", ctr.postSignup);
router.get("/signin", ctr.signin);
router.post("/signin", ctr.postSignin);
router.post("/profile", ctr.profile);
router.patch("/profile/edit", ctr.editProfile);
router.delete("/profile/delete", ctr.deleteProfile);

module.exports = router;
