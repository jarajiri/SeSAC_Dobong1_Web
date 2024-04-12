const express = require("express");
const ws = require("ws");
const PORT = 8081;
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wsServer = new ws.Server({ server });
const sockets = [];

function generateUniqueId() {
  const clientId = Math.random().toString(16).substring(3);
  return clientId;
}

wsServer.on("connection", (socket) => {
  const clientId = generateUniqueId();
  console.log(`클라이언트 : ${clientId}가 입장함`);
  sockets.map((socket) =>
    console.log(`현재 접속중인 클라이언트 : ${socket.clientId}`)
  );
  sockets.push({ clientId, socket });

  socket.on("message", (msg) => {
    console.log(`클라이언트 : ${msg}`);

    sockets.forEach((socket) => {
      socket.send(`${msg}`);
    });
  });

  socket.on("error", (err) => {
    console.log("연결 에러 발생", err);
  });

  // close : 연결이 종료 되었을 때
  socket.on("close", () => {
    console.log(`클라이언트(${clientId})와 연결이 종료되었습니다.`);
  });
});
