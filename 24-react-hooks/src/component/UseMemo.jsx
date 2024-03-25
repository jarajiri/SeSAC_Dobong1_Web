import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputvalue, setInputValue] = useState("");

  // before -- useMemo 사용전
  // const calc = () => {
  //   console.log("calculate...");
  //   return count * 2;
  // };

  // after -- useMemo 사용
  const calc = useMemo(() => {
    console.log("calculate...");
    return count * 2;
  }, [count]);
  return (
    <>
      <h3>useMemo</h3>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        +1
      </button>
      <p>{count}</p>
      {/* <p>{calc()}</p> */}
      <p>{calc}</p>
    </>
  );
};

export default UseMemo;
