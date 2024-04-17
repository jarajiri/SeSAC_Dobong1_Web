import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Chatting1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  // 메시지를 보낼때 input창의 문자열을 담을 스테이트
  const [msgInput, setMsgInput] = useState("");

  const [chatList, setChatList] = useState([
    {
      type: "me", // me,other,notice
      content: "내가 작성한 메시지",
    },
    {
      type: "other", // me,other,notice
      content: "남이 작성한 메시지",
    },
    {
      type: "notice", // me,other,notice
      content: "~~~ 님이 입장/퇴장 하셨습니다.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    initSocketConnect();
    // [문제점] newChatList를 만들때 mount 시점에 chatList만 이용
    // socket.on("notice", (notice) => {
    //   // chatList 스테이트에 서버에서 넘겨준 메시지를 추가
    //   // {type : 'notice', content : notice}
    //   const newChatList = [...chatList, { type: "notice", content: notice }];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    socket.on("notice", (notice) => {
      // chatList 스테이트에 서버에서 넘겨준 메시지를 추가
      // {type : 'notice', content : notice}
      const newChatList = [...chatList, { type: "notice", content: notice }];
      setChatList(newChatList);
    });
  }, [chatList]);

  return (
    <>
      <ul>
        <li>채팅방 UI 만들기</li>
        <li>누가 입장했는지 공지(socket.id)</li>
      </ul>

      <div className="container">
        <header>코코아톡🐛</header>
        <section>
          {/* <Speech chat={chatList[0]} />
          <Speech chat={chatList[1]} />
          <Notice chat={chatList[2]} /> */}
          {chatList.map((chat, i) =>
            chat.type === "notice" ? (
              <Notice key={i} chat={chat} />
            ) : (
              <Speech key={i} chat={chat} />
            )
          )}
        </section>
        <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
          <select id="dm-select">
            {/* <!-- <option value="all">전체</option> --> */}
          </select>
          <input
            type="text"
            placeholder="메세지 입력"
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <button>전송</button>
        </form>
      </div>
    </>
  );
}
