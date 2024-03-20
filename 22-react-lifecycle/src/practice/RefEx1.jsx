import { useRef } from "react";
import { useState } from "react";

export default function RefEx1() {
  const [color, setColor] = useState("");
  const refDiv = useRef();
  const refInput = useRef();
  const changeColor = () => {
    refDiv.current.style.backgroundColor = color;
    setColor("");
    refInput.current.focus();
  };
  return (
    <div
      style={{
        border: "1px solid",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={refDiv}>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
        ref={refInput}
      />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
