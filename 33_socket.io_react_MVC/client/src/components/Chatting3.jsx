import React, { useEffect, useMemo, useRef, useState } from "react";
import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Chatting3() {
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

  const [nicknameInput, setNicknameInput] = useState(""); // 닉네임 input창
  const [nickname, setNickname] = useState(null); // 내 닉네임을 관리하는 state
  const [userList, setUserList] = useState({}); // 전체 클라이언트 닉네임 정보 관리
  const [dmTo, setDmTo] = useState("all"); //DM 관련 state

  // 메시지 보내기
  const handleSubmit = (e) => {
    e.preventDefault();
    if (msgInput.trim() === "") return setMsgInput("");
    const sendData = {
      dm: dmTo, // all or socket.id
      msg: msgInput,
      myNick: nickname,
    };
    socket.emit("send", sendData);
    setMsgInput("");
  };

  useEffect(() => {
    socket.on("notice", (notice) => {
      const newChatList = [...chatList, { type: "notice", content: notice }];
      setChatList(newChatList);
    });
  }, [chatList]);

  const join = () => {
    initSocketConnect();
    // [닉네임사용1] : 중복체크를 위해 서버로 닉네임 전송
    socket.emit("checkNick", nicknameInput);
  };

  useEffect(() => {
    // [닉네임사용3] - 입장실패
    socket.on("error", (errMsg) => {
      alert(errMsg);
    });

    // [닉네임사용3] - 입장성공
    // 사용가능한 내 닉네임을 전달 받아서 nickname state에 저장
    socket.on("entrySuccess", (nick) => {
      setNickname(nick);
    });

    // nickname 정보 받아서 저장
    socket.on("updateNicks", (nickInfo) => {
      console.log(nickInfo);
      setUserList(nickInfo);
    });
  }, []);

  const enterRoom = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      join();
    }
  };
  // option 만들기
  const userOptions = useMemo(() => {
    const options = [];
    for (let key in userList) {
      console.log(key);
      // if (key !== socket.id)
      // if (nickname !== userList[key])
      if (key !== socket.id)
        options.push(
          <option value={key} key={key}>
            {userList[key]}
          </option>
        );
    }
    return options;
  }, [userList]);

  // 메시지 보내기
  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
      // {id : 메시지를 보낸 사람의 닉네임, message : 보낸 메시지, isDm : true,undefined}
      // 내 닉네임 : nickname 스테이트에서 관리
      // 보낸 사람의 닉네임 : data.id
      const type = data.id === nickname ? "me" : "other";
      const content = `${data.isDm ? "[DM]" : ""} ${data.message}`;
      const isDm = data.isDm;
      const newChatList = [
        ...chatList,
        { type: type, content: content, isDm: isDm, name: data.id },
      ];
      setChatList(newChatList);
    });
  }, [chatList, nickname]);

  const scrollDiv = useRef(null);
  useEffect(() => {
    scrollDiv.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  return (
    <>
      <ul>
        <li>메시지 보내기</li>
        <li>DM 보내기</li>
      </ul>
      {/* 
          nickname이 null이면 닉네임 입력창
          nickname이 존재하면 채팅창 
      */}

      {!nickname ? (
        <div className="entry-box">
          <input
            type="text"
            placeholder="닉네임 입력"
            // id="nickname"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            onKeyDown={(e) => enterRoom(e)}
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
        <div className="container">
          <header>코코아톡🐛 - {nickname}</header>
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
            <div ref={scrollDiv}></div>
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            <select id="dm-select" onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userOptions}
            </select>
            <input
              type="text"
              placeholder="메세지 입력"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
}
