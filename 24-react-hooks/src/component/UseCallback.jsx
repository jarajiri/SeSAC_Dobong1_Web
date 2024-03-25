import React, { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [number, SetNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log(`number : ${number} 😇`);
  };

  const func2 = useCallback(() => {
    console.log(`number: ${number} 🥶`);
  }, [number]);

  useEffect(() => {
    console.log("함수1 변경 ~~ 🥊");
  }, [func1]);
  useEffect(() => {
    console.log("함수2 변경 !! ⛳️");
  }, [func2]);

  return (
    <>
      <h3>useCallback</h3>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            SetNumber(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            func1();
            func2();
          }}>
          call function
        </button>
        <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
      </div>
    </>
  );
};

export default UseCallback;
