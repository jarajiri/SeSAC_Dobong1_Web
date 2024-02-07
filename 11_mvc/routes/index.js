const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main);

// GET /comments
router.get("/comments", controller.comments);

// GET /comment/:id (params)
router.get("/comment/:id", controller.comment);

// 한번에 내보내기
module.exports = router;
