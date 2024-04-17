const express = require("express");
const http = require("http");
const socketHandler1 = require("./sockets/index1");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
socketHandler1(server);

const cors = require("cors");
app.use(cors());

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
