const express = require("express");
const http = require("http");
const app = express();
const PORT = 8080;
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");

app.get("/pra", (req, res) => {
  res.render("practice");
});

io.on("connection", (socket) => {
  socket.on("hello", (message) => {
    console.log(`client : ${message}`);
    io.emit("send_hello", message);
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
