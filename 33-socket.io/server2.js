const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const PORT = 8080;
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");

app.get("/pra", (req, res) => {
  res.render("client2");
});

io.on("connection", (socket) => {
  socket.on("hello", (message, cb) => {
    console.log(`client : ${message}`);
    cb("안녕하세요");
  });
  socket.on("study", (message) => {
    console.log(`client : ${message}`);
    io.emit("send_study", message);
  });
  socket.on("bye", (message) => {
    console.log(`client : ${message}`);
    io.emit("send_bye", message);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
