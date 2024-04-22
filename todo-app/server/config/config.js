const dotenv = require("dotenv");
dotenv.config();

// local 기준
const development = {
  username: "sesac",
  password: "1234",
  database: "dobong",
  host: "127.0.0.1",
  dialect: "mysql",
};
// rds 기준
const production = {
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: "sesac",
  host: process.env.RDS_HOST,
  dialect: "mysql",
};

module.exports = { development, production };
