import React, { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  //   useEffect(effect,deps)
  /* 
    - effect : callback function
        콜백함수 내에 특정 시점에서 실행하고 싶은 코드 작성
    -deps : 해당 배열값이 변하면 cb 함수 실행
        생략: mount, update시 항상 동작
        []:mount되었을 때만 실행
        [data]:mount, data가 바뀌었을 때 실행(update, mount)
    */

  // mount 되었을 때
  //   useEffect(() => {
  //     console.log("함수형 컴포넌트 mount");
  //   }, []);

  // unmount 되었을 때
  //   useEffect(() => {
  //     // console.log("함수형 컴포넌트 mount");

  //     return () => {
  //       console.log("함수형 컴포넌트 unmount");
  //     };
  //   });

  // update 되었을 때
  useEffect(() => {
    console.log("함수형 컴포넌트 | update될 때마다!!");
  });

  // number만 update 되엇을 때
  useEffect(() => {
    console.log("함수형 컴포넌트 | number 만 변경될 때 실행");
  }, [number]);
  return (
    <>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => setNumber(number + 1);
  const changeVisible = () => setVisible(!visible);

  return (
    <>
      <button onClick={changeNumber}>number + 1</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};

export default LifeCycleFunc;
