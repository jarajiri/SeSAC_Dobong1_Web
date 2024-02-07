const express = require("express");
const router = express.Router();

const ctr = require("../controller/Clogin");

router.get("/", ctr.login);
router.post("/", ctr.loginPost);
router.post("/split", ctr.user);

module.exports = router;
