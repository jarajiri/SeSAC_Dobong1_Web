import React, { useState } from "react";
import { AgeContext } from "../../contexts/AgeContext";

const AgeProvider = (props) => {
  const { children } = props;
  console.log(children);
  const [age, setAge] = useState(20);
  return <AgeContext.Provider value={{ age, setAge }}>{children}</AgeContext.Provider>;
};

export default AgeProvider;
