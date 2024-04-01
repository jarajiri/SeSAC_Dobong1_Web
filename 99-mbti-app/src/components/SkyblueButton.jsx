import React from "react";
import Button from "./Button";

const OrangeButton = ({ text, clickEvent }) => {
  return <Button text={text} clickEvent={clickEvent} mainColor="#c1e3ff" subColor="#7cb8fd" hoverColor="#d7f6ff" />;
};

export default OrangeButton;
