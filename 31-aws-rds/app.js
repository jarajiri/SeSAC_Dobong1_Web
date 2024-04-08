const express = require("express");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();
const PORT = process.env.PORT;
const app = express();

const userModel = require("./models/Users");

//config 설정
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
// config를 가져와서 define
const User = userModel(sequelize);

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API
// GET /api >> '안녕하세요..'' send
app.get("/api", (req, res) => {
  res.send("안녕하세요");
});
// POST /api/users >> user row 하나 추가
app.post("/api/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({
      username,
      email,
    });
    console.log(newUser);
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.send({ message: "서버오류" });
  }
});

//
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("sequelize sync error");
    console.log(err);
  });
