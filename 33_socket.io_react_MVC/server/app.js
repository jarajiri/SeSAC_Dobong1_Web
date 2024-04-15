const express = require("express");
const http = require("http");
const socketHandler = require("./sockets");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
socketHandler(server);

const cors = require("cors");
app.use(cors());

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
