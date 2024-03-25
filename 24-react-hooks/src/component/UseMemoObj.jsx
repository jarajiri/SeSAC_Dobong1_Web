import React, { useEffect, useMemo, useState } from "react";

const UseMemoObj = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 바뀔 때마다 실행됩니다.");
  }, [location]);
  // 오브젝트를 디펜던시 어레이에 사용할 경우 재렌더링시 새로운 객체를 계속 생성하기 때문에 실제로 값은 바뀌지 않았지만 콘솔로그가 실행됨!!
  // 이럴땐 useMemo를 사용한다

  return (
    <>
      <h3>useMemo Object</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <div>{location.country}</div>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}>
        나라 바꾸기
      </button>
    </>
  );
};

export default UseMemoObj;
