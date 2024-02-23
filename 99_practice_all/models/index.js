"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const userModel = require("./User")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.userModel = userModel;

module.exports = db;
