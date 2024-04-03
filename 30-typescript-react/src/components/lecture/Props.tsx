interface Props1 {
  name: string;
}
interface Props2 {
  width: string;
  height: string;
  color: string;
  //   [key:string]:string; //어떤 키값이 들어오는지 모를경우
}
interface Props3 {
  width: number;
  height: number;
  color?: string;
  text: string;
}
export function Props1({ name }: Props1) {
  return <p>hello {name}</p>;
}
export function Props2(props: Props2) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  return <div style={divStyle}></div>;
}
export function Props3(props: Props3) {
  const { width, height, color, text } = props;
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color ? color : "gray",
    text: text,
    textAlign: "center",
    lineHeight: `${height}px`,
  };
  return <div style={divStyle}>{text}</div>;
}
