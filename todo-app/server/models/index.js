const Sequelize = require("sequelize");
console.log(process.env.NODE_ENV); // development or production

// 분기 처리
let config;
if (process.env.NODE_ENV) {
  config = require(__dirname + "/../config/config.js")[process.env.NODE_ENV];
} else {
  config = require(__dirname + "/../config/config.js")["development"];
}

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const TodoModel = require("./Todo")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Todo = TodoModel;

module.exports = db;
