const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const events = ["hello", "study", "bye"];

  io.on("connection", (socket) => {
    events.forEach((event) => {
      socket.on(event, (message) => {
        console.log(`client : ${message}`);
        socket.emit(
          `res${event}`,
          `${message} : ${
            event === "hello" ? "ㅎㅇ" : event === "study" ? "ㄱㅂ" : "ㅂㅇ"
          }`
        );
        console.log(`res${event}`);
      });
    });

    // 클라이언트 연결 해제
    socket.on("disconnect", () => {});
  });
}

module.exports = socketHandler;
