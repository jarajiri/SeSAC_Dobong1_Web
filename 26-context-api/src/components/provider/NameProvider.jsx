import React, { useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const NameProvider = ({ children }) => {
  const [name, setName] = useState("홍길동");
  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;
};

export default NameProvider;
