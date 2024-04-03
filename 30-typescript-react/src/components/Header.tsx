import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/lecture"}>수업코드</Link>
      <Link to={"/practice"}>실습문제</Link>
    </>
  );
};

export default HeaderMenu;
