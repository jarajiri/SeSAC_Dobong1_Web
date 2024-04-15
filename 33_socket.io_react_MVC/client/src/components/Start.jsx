import React, { useEffect } from "react";
import io from "socket.io-client"; // 클라이언트 socket.io-client 패키지 가져오기

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Start() {
  const initSocketConnect = () => {
    console.log(socket.connected); //false
    if (!socket.connected) socket.connect(); // 클라이언트 소켓에 접속
  };

  useEffect(() => {
    initSocketConnect();
    socket.emit("test", "테스트");
    socket.on("test2", (message) => {
      console.log(message);
    });
  }, []);

  return <p>소켓 연결 테스트</p>;
}
