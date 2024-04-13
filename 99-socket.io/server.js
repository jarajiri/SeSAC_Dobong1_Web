const express = require("express");
const PORT = 8080;
const app = express();
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

io.on("connection", (socket) => {
  console.log("클라이언트 연결!!");
  console.log("클라이언트 아이디 : " + socket.id);
  //   socket.on("event_name", (a1, a2, a3, cb) => {
  //     console.log("클라이언트에서 받아온 인자 : ", a1);
  //     console.log("클라이언트에서 받아온 인자 : ", a2);
  //     console.log("클라이언트에서 받아온 인자 : ", a3);
  //     cb("콜백함수에 인자 전달!");
  //   });
  socket.on("newMessage", (messageInfo) => {
    console.log("messageInfo : ", messageInfo);
    io.emit("resNewMessage", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("server open port 8080");
});
