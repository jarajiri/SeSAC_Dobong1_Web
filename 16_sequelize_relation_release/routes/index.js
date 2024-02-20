const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// TODO: 라우터 정의
// player
router.get("/", controller.main);
router.get("/players", controller.getPlayers);
router.get("/players/:playerId", controller.getPlayers);
router.post("/players", controller.postPlayer);
router.patch("/players/:playerId", controller.patchPlayer);
router.delete("/players/:playerId", controller.deletePlayer);

// team
router.get("/teams", controller.getTeams);
router.get("/teams/:teamId", controller.getTeams);
router.get("/teams/:teamId/players", controller.getTeamPlayers);
module.exports = router;
