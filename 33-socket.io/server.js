const express = require("express");
const http = require("http");
const app = express();
const PORT = 8080;
const socketIO = require("socket.io");
const server = http.createServer(app); //
const io = socketIO(server); //http 기반으로 만들어진 서버를 인자로 전달해야함

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

app.get("/room", (req, res) => {
  res.render("room");
});

app.get("/pra", (req, res) => {
  res.render("practice");
});

io.on("connection", (socket) => {
  // io에서는 소켓의 아이디값이 이미 설정되어 있다.
  // websocket에서 generateId()
  console.log("socket.id >>>>", socket.id);
  //   socket.on("event_name", (arg1, arg2, arg3, cb) => {
  //     console.log(arg1);
  //     console.log(arg2);
  //     console.log(arg3);
  //     cb("응답!");
  //   });

  // 나에게만 전달
  //   socket.on("new_message", (message, cb) => {
  //     console.log(message);
  //     cb(message);
  //   });

  // 전체에게 전달
  socket.on("new_message", (message) => {
    io.emit("message_render", message);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} 연결 종료!!`);
  });

  // --------- room.ejs 채팅방 만들기 ------------
  //   console.log("방만들어지기 전 socket.rooms >>>", socket.rooms);
  // 2. 클라이언트에게 방 이름을 전달받아서 생성
  socket.on("join", (chatRoom) => {
    // console.log("chatRoom >>>", chatRoom);
    socket.join(chatRoom); // 채팅방 생성
    // console.log("socket.rooms >>>", socket.rooms);
    socket.room = chatRoom; // 다른 이벤트에서도 채팅방을 다룰 수 있도록 저장
    // 나를 제외한 참여한 채팅방 모두에게
    // socket.broadcast
    //   .to(chatRoom)
    //   .emit("userjoin", `[${socket.id}]님이 입장하셨습니다.`);
    // 3. 내가 포함된 방 클라이언트에게 입장 메시지 전달
    // 나를 포함한 참여한 채팅방 모두에게
    io.to(chatRoom).emit("userjoin", `[${socket.id}]님이 입장하셨습니다.`);
  });
  // 6. 하나의 클라이언트에게 메시지를 받아서 특정 채팅방의 모두에게 보여주기
  socket.on("message", (message) => {
    console.log(message);
    const id = socket.id;
    io.to(socket.room).emit("message_toAll", message, id);
  });

  socket.on("hello", (message) => {
    console.log(`client : ${message}`);
  });
  socket.on("study", (message) => {
    console.log(`client : ${message}`);
  });
  socket.on("bye", (message) => {
    console.log(`client : ${message}`);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
