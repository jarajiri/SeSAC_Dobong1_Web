const express = require("express");
const router = express.Router();

const ctr = require("../controller/Cvisitor");
// 렌더링, get 요청
router.get("/", ctr.main);
router.get("/visitors", ctr.getVisitors);
router.get("/visitors/:id", ctr.getOneVisitor);
router.post("/visitors", ctr.postVisitors);
router.delete("/visitors", ctr.deleteVisitors);
router.patch("/visitors", ctr.patchVisitors);

module.exports = router;
