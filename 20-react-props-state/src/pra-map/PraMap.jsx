import { useState } from "react";
export default function PraMap() {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "name",
      email: "email",
    },
    {
      id: 2,
      name: "name",
      email: "email",
    },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // 유효성 검사

  // 등록시키는 함수
  const addInfo = () => {
    if (inputName.trim().length === 0) return;
    if (inputEmail.trim().length === 0) return;
    const newInfo = info.concat({
      id: info.length === 0 ? 1 : info[info.length - 1].id + 1,
      name: inputName,
      email: inputEmail,
    });
    setInfo(newInfo);
    setInputName("");
    setInputEmail("");
  };
  // 엔터로 등록
  const checkEnter = (e) => {
    if (e.key === "Enter") {
      addInfo();
    }
  };
  // 삭-제
  const deleteInfo = (id) => {
    const newInfo = info.filter((el) => el.id !== id);
    setInfo(newInfo);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
      />
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        value={inputEmail}
        onKeyDown={checkEnter}
      />
      <button onClick={addInfo}>등록</button>

      {info.map((el) => {
        return (
          <div key={el.id} onDoubleClick={deleteInfo(el.id)}>
            {el.name} : {el.email}
          </div>
        );
      })}
    </div>
  );
}
