const express = require("express");
const app = express();
const PORT = 8100;
const router = require("./routes");
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log("server open");
    });
  })
  .catch((err) => {
    console.log(err);
  });
