const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const events = ["hello", "study", "bye"];

  io.on("connection", (socket) => {
    // socket.on("test", (message) => {
    //   console.log(message);
    //   socket.emit("test2", "test 메시지 받기 완료");
    // });
    // 실습
    events.forEach((event) => {
      socket.on(event, (message) => {
        console.log(`client : ${message}`);
        socket.emit(
          `res${event}`,
          `${message} : ${
            event === "hello" ? "ㅎㅇ" : event === "study" ? "ㄱㅂ" : "ㅂㅇ"
          }`
        );
        // console.log(`res${event}`);
      });
    });

    // 클라이언트 연결 해제
    socket.on("disconnect", () => {});
  });
}

module.exports = socketHandler;
