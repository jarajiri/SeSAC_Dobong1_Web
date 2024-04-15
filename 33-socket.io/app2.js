const express = require("express");
const http = require("http");
const app = express();
const PORT = 8080;
const socketIO = require("socket.io");
const server = http.createServer(app); //
const io = socketIO(server); //http 기반으로 만들어진 서버를 인자로 전달해야함

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("talk_basic");
});

io.on("connection", (socket) => {
  /* 실습3 입장-1 */
  socket.broadcast.emit("notice", `${socket.id}님이 등장`);
  socket.on("send", (message) => {
    // console.log(`${socket.id}:${message}`);
    io.emit("message", { id: socket.id, message: message });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
