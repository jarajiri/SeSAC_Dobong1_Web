import { useState } from "react";
import { useRef } from "react";

export function RefFunction1() {
  const inputRef = useRef();
  const handleFocus = () => {
    // console.log(inputRef);
    // console.log(inputRef.current);
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <>
      <p>버튼 클릭시 input에 포커스 처리(useRef)</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
}
// ref를 변수로 사용해보기
export function RefFunction2() {
  const refVal = useRef(1);
  const [stateVal, setStateVal] = useState(1);
  let variable = 1;

  const plusRef = () => {
    console.log("ref =========== ", refVal.current);
    refVal.current += 1;
  };
  const plusState = () => {
    setStateVal(stateVal + 1);
    console.log("state ============ ", stateVal);
  };
  const plusVariable = () => {
    variable++;
    console.log("variable =========", variable);
  };
  return (
    <>
      <h3>{refVal.current}</h3>
      <h3>{stateVal}</h3>
      <h3>{variable}</h3>
      <button onClick={plusRef}>ref +1</button>
      <button onClick={plusState}>state +1</button>
      <button onClick={plusVariable}>variable +1</button>
    </>
  );
}
