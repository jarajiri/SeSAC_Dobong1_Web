import React from "react";

interface Props1 {
  name: string;
}

interface Props2 {
  width: string;
  height: string;
  color: string;
}
interface Props3 {
  width: number;
  height: number;
  color?: string;
  text: string;
}

export function Props1({ name }: Props1) {
  return <p>{name}</p>;
}

export function Props2({ width, height, color }: Props2) {
  return <div style={{ width, height, backgroundColor: color }}></div>;
}

export function Props3({ width, height, color, text }: Props3) {
  const divStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color ? color : "gray",
    // textAlign: "center" as 'center',
    textAlign: "center" as const,
    lineHeight: `${height}px`,
  };
  return <div style={divStyle}>{text}</div>;
}
