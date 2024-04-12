const express = require("express");
const http = require("http");
const app = express();
const PORT = 8080;
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.get("/pra", (req, res) => {
  res.render("practice2");
});

io.on("connection", (socket) => {
  console.log("server socket connected", socket.id);
  io.emit("notice", `${socket.id}님이 입장하셨습니다.`);
  // 클라이언트에서 메시지 받아오고 로직
  socket.on("newMessage", (text) => {
    console.log(text);
    io.emit("sendAll", text, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
