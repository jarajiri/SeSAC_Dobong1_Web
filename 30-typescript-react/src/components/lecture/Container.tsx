import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div style={{ border: "1px dotted yellowgreen" }}>{children}</div>;
};

export default Container;
