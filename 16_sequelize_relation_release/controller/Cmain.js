// TODO: 컨트롤러
const { Op } = require("sequelize");
const models = require("../models");
const { playerModel, profileModel, teamModel } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};
//### 전체 선수 조회
exports.getPlayers = async (req, res) => {
  try {
    const players = await playerModel.findAll();
    console.log(players);
    res.send(players);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};
//### 특정 선수 조회 (params)
exports.getPlayer = async (req, res) => {
  try {
    const player = await playerModel.findOne({
      where: {
        player_id: req.params,
      },
    });
    console.log(player);
    res.send(player);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};

//### 선수 "추가"
exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await playerModel.create({
      name,
      age,
      team_id,
    });
    console.log(newPlayer);
    res.send(newPlayer);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};

//### 특정 선수의 정보 변경(params)
exports.patchPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const { playerId } = req.params;
    const playerInfo = await playerModel.update(
      {
        name,
        age,
        team_id,
      },
      {
        where: {
          player_id: playerId,
        },
      }
    );
    console.log(playerInfo);
    res.send(playerInfo);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};

// 특정 선수 삭제(params)
exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const isDeleted = await playerModel.destroy({
      where: {
        player_id: playerId,
      },
    });
    console.log(isDeleted);
    isDeleted === 1 ? res.send("삭제 성공") : res.send("삭제 실패");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};

//팀 관련 api 요청
// 전체 팀 조회 + 필터링
exports.getTeams = async (req, res) => {
  try {
    // console.log(teams);
    const { sort, search } = req.query;
    let teams;
    if (sort && search) {
      teams = await teamModel.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "desc"]],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else if (sort) {
      teams = await teamModel.findAll({
        attributes: ["team_id", "name"],
        // attributes: 쿼리 결과에 표시할 컬럼 지정옵션
        order: [["name", "asc"]],
      });
    } else if (search) {
      teams = await teamModel.findAll({
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    }
    console.log(teams);
    teams.length === 0 ? res.send("다시 검색하세요") : res.send(teams);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};
// 특정 팀 하나 조회
exports.getTeams = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await teamModel.findOne({
      where: {
        team_id: teamId,
      },
    });
    console.log(team);
    res.send(team);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { teamId } = req.params;
    const teamPlayers = await teamModel.findAll({
      where: {
        team_id: teamId,
      },
      include: [
        {
          model: playerModel,
          attributes: ["name", "age"],
        },
      ],
    });
    console.log(teamPlayers);
    res.send(teamPlayers);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("server error");
  }
};
