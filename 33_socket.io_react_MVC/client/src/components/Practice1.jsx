import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();
  }, []);

  const [fromServerStr, setFromServerStr] = useState("");

  function sendMsg(str) {
    socket.emit(str, str);
    socket.on(`res${str}`, (message) => {
      setFromServerStr(message);
    });
  }
  return (
    <>
      <button onClick={() => sendMsg("hello")}>hello</button>
      <button onClick={() => sendMsg("study")}>study</button>
      <button onClick={() => sendMsg("bye")}>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
