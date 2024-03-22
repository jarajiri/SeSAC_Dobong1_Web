import { useRef } from "react";
import { useState } from "react";

export default function RefEx1() {
  const [color, setColor] = useState("");
  const refDiv = useRef();
  const refInput = useRef();
  const changeColor = () => {
    setColor(refInput.current.value);
    refInput.current.value = "";
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
        backgroundColor: color,
      }}
      ref={refDiv}>
      <input type="text" ref={refInput} />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
