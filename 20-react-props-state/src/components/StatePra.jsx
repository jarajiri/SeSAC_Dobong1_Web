import { useState } from "react";

export function StatePra1() {
  const [number, setNumber] = useState(0);
  function increase() {
    setNumber(number + 1);
  }
  function decrease() {
    setNumber(number - 2);
  }
  return (
    <>
      <div>{number >= 8 ? "😀" + number : "🥲" + number}</div>
      <button onClick={increase}>1씩 증가</button>
      <button onClick={decrease}>-2씩 감소</button>
    </>
  );
}
