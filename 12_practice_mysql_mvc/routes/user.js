// TODO: 라우트 설정
const express = require("express");
const router = express.Router();

const ctr = require("../controller/Cuser");

router.get("/", ctr.main);
router.get("/signin", ctr.signin);
router.post("/signin", ctr.postSignin);

module.exports = router;
