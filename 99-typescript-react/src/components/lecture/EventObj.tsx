import React from "react";

export default function EventObj() {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    console.log(e.target);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log(e.target);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.code);
    console.log(e.key);
    if (e.key === "Enter") console.log("엔터키를 눌렀습니다.");
  };

  return (
    <>
      <div onClick={(e) => console.log(e.currentTarget)}>
        <span>클릭시 콘솔에 e.target 출력</span>
      </div>
      <div onClick={handleClick}>클릭시 handleClick 함수 실행</div>
      <div>
        <span>인풋값이 바뀔때마다 handleChange함수 실행</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>키다운이벤트 마다 handleKeyDown함수 실행</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
    </>
  );
}
