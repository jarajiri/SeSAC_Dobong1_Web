"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"]; //json파일은 객체 접근시 "" 안에 작성
const db = {};

console.log("config >>>", config);
// const sequelize = new Sequelize(DB명,사용자명,비밀번호,config 정보 전체)
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize; // 객체안에 키 벨류 추가
db.Sequelize = Sequelize; // db= {sequelize:sequelize, Sequelize:Sequelize}

// 모델이 여러개 있으면
// 여러 개의 모델을 require한 이후에 sequelize, Sequelize를 전달해야함
db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
// db 변수 내보내기
module.exports = db;
