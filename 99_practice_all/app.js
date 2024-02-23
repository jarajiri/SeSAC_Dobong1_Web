const express = require("express");
const session = require("express-session");
const router = require("./routes/router");
const { sequelize } = require("./models");
const app = express();
const PORT = 8100;

/* 미들웨어 설정 */
app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 세션 설정 */
const sessionConfig = {
  secret: "secretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24,
    signed: true,
  },
};
app.use(session(sessionConfig));

/* 라우터 설정 */
app.use("/", router);

/* 시퀄라이즈 설정 */
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection succeeded!");
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
