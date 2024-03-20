import { useState } from "react";
function HandlerEx1() {
  const [text, setText] = useState("Hello World!");
  function changeText() {
    setText("GoodBye World!");
  }
  return (
    <>
      <h2>{text}</h2>
      <button onClick={changeText}>클릭</button>
    </>
  );
}
function HandlerEx2() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  function changeText() {
    setText("GoodBye World!");
  }
  function changeColorRed() {
    setColor("red");
    setText("빨간색 글씨");
  }
  function changeColorBlue() {
    setColor("blue");
    setText("파란색 글씨");
  }
  return (
    <>
      <h2 style={{ color: color }}>{text}</h2>
      <button onClick={changeColorRed}>빨간색</button>
      <button onClick={changeColorBlue}>파란색</button>
      <hr />
    </>
  );
}

function HandlerEx3() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        {show ? "사라져라" : "보여라"}
      </button>
      <h2>{show ? "안녕하세요" : ""}</h2>
      <hr />
    </>
  );
}

export { HandlerEx1, HandlerEx2, HandlerEx3 };
