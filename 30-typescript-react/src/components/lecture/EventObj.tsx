import React from "react";

const EventObj = () => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    console.log(e.target);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("e.code====", e.code);
    console.log("e.key====", e.key);
    console.log("e.keyCode====", e.keyCode);
    if (e.key === "Enter") console.log("엔터가 눌렸다");
  };
  return (
    <>
      <div onClick={(e) => console.log(e.target)}>onClick</div>
      <div onClick={handleClick}>onClick</div>
      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
    </>
  );
};

export default EventObj;
