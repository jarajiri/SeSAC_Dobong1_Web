const express = require("express");
const app = express();

// .env파일에 만들어둔 환경변수를 읽어오기 위한 설정
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
// console.log(process.env);

app.get("/", (req, res) => {
  console.log("mysql 패스워드", process.env.MYSQL_PASSWORD);
  console.log("API KEY", process.env.API_KEY);
  res.send("응답완료");
});

app.listen(PORT, (req, res) => {
  console.log("8100");
});
