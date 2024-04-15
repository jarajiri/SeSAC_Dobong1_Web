const express = require("express");
const http = require("http");
const app = express();
const PORT = 8080;
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("talk_dm");
});

const nickInfo = {}; // 닉네임 정보들을 담을 객체 선언
// {socket.id : nickname} 형식으로 저장
io.on("connection", (socket) => {
  // 닉네임 중복체크 후 중복 아닐때만 nickInfo에 정보 추가
  socket.on("checkNick", (nickname) => {
    console.log(nickInfo);
    console.log(Object.values(nickInfo)); // 벨류값만 나열한 배열을 반환
    console.log(Object.values(nickInfo).indexOf(nickname));
    // [a,b,c,d].indexof('b') = 1
    // [a,b,c,d].indexof('f') = -1
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      //중복된 닉네임, 입장실패
      //에러메시지 전송
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      //중복되지 않은 닉네임, 입장 성공
      //나의 닉네임 정보만 나에게 전달
      nickInfo[socket.id] = nickname; // 소켓아이디를 키값으로 닉네임 벨류를 할당
      socket.emit("entrySuccess", nickname);
      //알림 메시지(~~님이 입장하셨습니다.) 전달(나를 제외한)
      socket.broadcast.emit("notice", `${nickname}님이 등장`);
      //전체 클라이언트에게 updated nickInfo 전달(나 포함)
      io.emit("updateNicks", nickInfo);
    }
  });

  /* 실습3 입장-1 */
  // socket.broadcast.emit("notice", `${socket.id}님이 등장`);
  // socket.on("send", (message) => {
  // console.log(`${socket.id}:${message}`);
  // io.emit("message", { id: socket.id, message: message });
  // });

  socket.on("send", (msgData) => {
    if (msgData.dm === "all") {
      // 전체
      io.emit("message", { id: msgData.myNick, message: msgData.msg });
    } else {
      // dm
      // io.to(소켓아이디).emit()
      // 특정 소켓 아이디를 가진 클라이언트에게만 emit 작업

      // dm, 특정 socket.id를 가진 클라리언트... 나 포함 x
      io.to(msgData.dm).emit("message", {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,
      });
      // 나에게만 보여주기
      socket.emit("message", {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,
      });
    }
  });

  // 퇴장
  socket.on("disconnect", () => {
    // ~~님이 퇴장하셨습니다. 화면에 띄우기
    io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
    // nickInfo {}에서 특정 키 삭제
    delete nickInfo[socket.id];
    // 객체 변경 후 클라이언트에게 변경된 객체정보 전달
    io.emit("updateNicks", nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
