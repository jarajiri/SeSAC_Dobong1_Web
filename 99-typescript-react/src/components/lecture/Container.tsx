import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <div style={{ border: "1px solid blue" }}>{children}</div>;
}
