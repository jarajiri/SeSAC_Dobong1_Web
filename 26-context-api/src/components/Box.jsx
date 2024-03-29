import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const Box = () => {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <>
      <h4>ThemeContext 값 가져오기</h4>
      <p>themeContext:{context}</p>
    </>
  );
};

export default Box;
