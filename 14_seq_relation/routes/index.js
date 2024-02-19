const express = require("express");
const router = express.Router();

const ctr = require("../controller/Cmain");

// GET /
router.get("/", ctr.main);
// GET /player
router.get("/players", ctr.getAllPlayer);
// GET /player/:playerId
router.get("/players/:playerId", ctr.getPlayer);
router.post("/players", ctr.postPlayer);
// router.patch("/players/:playerId/team");
// router.delete("/players/:playerId");

// team 모델 관련 라우팅

router.get("/teams", ctr.getTeams);
router.get("/teams/:teamId", ctr.getTeams);
router.get("/teams/:teamId/players", ctr.getTeamPlayers);
module.exports = router;
