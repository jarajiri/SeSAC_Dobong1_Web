"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];
// const config = require(__dirname + "/../config/config.json")["development"];

console.log(config);
const db = {};

// Sequelize 클래스 사용해서 인스턴스 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기, 인스턴스와 Sequelize 모듈 전달
const Player = require("./Player")(sequelize, Sequelize);
const Profile = require("./Profile")(sequelize, Sequelize);
const Team = require("./Team")(sequelize, Sequelize);
const Game = require("./Game")(sequelize, Sequelize);
const TeamGame = require("./TeamGame")(sequelize, Sequelize);

// 모델간 관계 설정
// hasOne, hasMany, belongsTo, belongsMany

/*
  1:1 관계설정
  player <---> profile
  player의 pk가 profile fk가 된다 == profile은 player에 속해 있다(belongsTo)
*/
// 키설정
Player.hasOne(Profile, {
  foreignKey: "player_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
Profile.belongsTo(Player, {
  foreignKey: "player_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

/*
  1:N 관계설정
  team <---> player
  한팀에 여러 플레이어가 속해있음

*/
Team.hasMany(Player, {
  // sourceKey: "team_id",
  foreignKey: "team_id",
  // onUpdate: "CASCADE",
  // onDelete: "CASCADE",
});
Player.belongsTo(Team, {
  // target: "team_id",
  foreignKey: "team_id",
  // onUpdate: "CASCADE",
  // onDelete: "CASCADE",
});

/*
  N:M 관계설정
  Team <---> Game
  하나의 팀은 여러 경기를 할 수 있고, 하나의 경기에는 여러팀(2팀)이 참여
*/
Team.belongsToMany(Game, {
  through: TeamGame,
  foreignKey: "team_id",
});
Game.belongsToMany(Team, {
  through: TeamGame,
  foreignKey: "game_id",
});

// db객체에 모델 추가
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Player = Player;
db.Profile = Profile;
db.Team = Team;
db.Game = Game;
db.TeamGame = TeamGame;

module.exports = db;
