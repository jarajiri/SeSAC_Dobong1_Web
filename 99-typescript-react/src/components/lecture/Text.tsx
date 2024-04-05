import React, { useRef, useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const refVal = useRef<number>(0);
  const changeState = (): void => {
    if (typeof ref.current?.value === "string") {
      setText(ref.current.value);
    }
  };

  const changeRef = (): void => {
    refVal.current += 1;
    console.log(refVal.current);
  };
  return (
    <>
      <p>useState, useRef</p>
      <input type="text" ref={ref} />
      <button onClick={changeState}>state 변경</button>
      <p>state : {text}</p>
      <p>ref : {ref.current?.value}</p>

      <button onClick={changeRef}>ref+1</button>
      <p>ref Value : {refVal.current}</p>
    </>
  );
}
