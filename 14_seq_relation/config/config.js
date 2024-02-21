// env 사용 설정
require("dotenv").config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "DOBONG",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };

/* 
{
  "development": {
    "username": "sesac",
    "password": "1234",
    "database": "DOBONG",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {},
  "production": {}
}
*/
