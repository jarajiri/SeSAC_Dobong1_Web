const { Op } = require("sequelize");
const models = require("../models");
// models={Player,Profile,... sequelize,Sequelize}
const { Player, Profile, Team } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};
// GET /players
// 전체 선수 목록
exports.getAllPlayer = async (req, res) => {
  try {
    // const players = await models.Player.findAll();
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
// GET /player/:playerId
// 선수 한명 조회
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params);
    const { playerId } = req.params;
    const player = await Player.findOne({
      where: {
        player_id: playerId,
      },
      include: [
        // include: 두 테이블을 합쳐서 보여줌(inner join)
        {
          model: Profile,
          attributes: ["position", "salary"],
        },
      ],
    });
    res.json(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    console.log(name);
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
      // 컬럼이름이랑 요청에 넘어온 변수의 이름이 같으면 한번만 작성
    });
    console.log(newPlayer);
    res.json(newPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
// playerId = req.params 어떤 선수
// teamId = req.body 어떤 팀으로 변경할건지
exports.patchPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const { team_id } = req.body;
    const updatePlayer = await Player.update(
      {
        team_id: team_id,
      },
      {
        where: {
          player_id: playerId,
        },
      }
    );
    console.log(updatePlayer);
    res.json(updatePlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500), send("server error");
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
      },
    });

    console.log(isDeleted); // 1(true) 0(false)
    isDeleted ? res.send("삭제 성공") : res.send("삭제 실패");
  } catch (err) {
    console.log("err", err);
    res.status(500), send("server error");
  }
};

exports.getTeams = async (req, res) => {
  try {
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;
    // sort = name_asc >> 전체 조회 및 이름순 팀 정렬
    // search=[팀이름] >> 특정 팀 이름만 조회
    if (sort === "name_asc") {
      //이름 오름차순 정렬
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]], // ORDER BY name ASC
      });
    } else if (search) {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          // WHERE name LIKE '%KT%'
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      // sort에 name_asc외의 문자열이 들어오거나
      // sort search 가 전달되지 않았을때
      // SELECT team_id, name FROM team
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }

    if (teams.length === 0) res.send("다시 검색하세요");
    else res.send(teams);
  } catch (err) {
    console.log("err", err);
  }
};

// get /teams/:teamId
exports.getTeams = async (req, res) => {
  try {
    const { teamId } = req.params;
    team = await Team.findOne({
      where: {
        team_id: teamId,
      },
    });
    res.send(team);
  } catch (err) {
    console.log("err", err);
    res.send("server error");
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    // 1. 팀 정보는 안봐도 되고
    // 특정 팀의 선수 정보만 확인하기 위해서는
    // player 모델에서 teamid 기준으로 조회
    const { teamId } = req.params;
    // const teamPlayers = await Player.findAll({
    //   where: {
    //     team_id: teamId,
    //   },
    // });
    // 2. 특정 팀의 정보와 해당 팀의 선수 정보
    const teamPlayers = await Team.findOne({
      where: {
        team_id: teamId,
      },
      include: [
        {
          model: Player,
          attributes: ["name", "age"],
        },
      ],
    });
    res.send(teamPlayers);
  } catch (err) {
    console.log("err", err);
    res.send("server error");
  }
};
