import React, { useCallback, useEffect, useState } from "react";

const UseCallback2 = () => {
  const [text, setText] = useState("");
  // input 태그의 onChange 이벤트는 업데이트가 잦은 state가 있음
  // 재렌더링이 될때마다 새롭게 이벤트 핸들러 함수가 생성
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  // 반복되는 이벤트 핸들러 함수 >> useCallback이용 메모이제이션
  // 메모리 누수 예방
  // 차이점이 느껴집니까 휴먼
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h3>useCallback2</h3>
      <input type="text" onChange={onChangeText} value={text} />
      <p>작성한 값:{text}</p>
    </>
  );
};

export default UseCallback2;
