"use strict";

const Sequelize = require("sequelize");
const TeamModel = require("./Team");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// TODO: 모델 모듈 불러오기
const playerModel = require("./Player")(sequelize, Sequelize);
const profileModel = require("./Profile")(sequelize, Sequelize);
const teamModel = require("./Team")(sequelize, Sequelize);

// TODO: 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐
playerModel.hasOne(profileModel, {
  foreignKey: "player_id",
  allowNull: false,
  onUpdate: "cascade",
  onDelete: "cascade",
});
profileModel.belongsTo(playerModel, {
  foreignKey: "player_id",
  allowNull: false,
  onUpdate: "cascade",
  onDelete: "cascade",
});
// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
teamModel.hasMany(playerModel, {
  foreignKey: {
    name: "team_id",
    allowNull: false,
    onUpdate: "cascade",
    onDelete: "cascade",
  },
});
playerModel.belongsTo(teamModel, {
  foreignKey: {
    name: "team_id",
    allowNull: false,
    onUpdate: "cascade",
    onDelete: "cascade",
  },
});

// TODO: 관계 정의한 모델들을 db 객체에 저장
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.playerModel = playerModel;
db.profileModel = profileModel;
db.teamModel = teamModel;
module.exports = db;
