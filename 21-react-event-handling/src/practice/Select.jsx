import React, { useState } from "react";
import Result from "./Result";
function Select() {
  const [fruit, setFruit] = useState("apple");
  const [bgColor, setBgColor] = useState("black");
  const [fontColor, setFontColor] = useState("white");
  const [content, setContent] = useState("");

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          setFruit(e.target.value);
        }}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setBgColor(e.target.value);
        }}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          setFontColor(e.target.value);
        }}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      내용 :
      <input
        type="text"
        placeholder="내용 입력"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <br />
      <Result fruit={fruit} bgColor={bgColor} fontColor={fontColor} content={content} />
    </>
  );
}

export default Select;
