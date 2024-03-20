import { FunctionProps } from "./FunctionProps";

export default function PropsMap({ arr }) {
  return (
    <div>
      {arr?.map((el, index) => {
        return (
          // js 안에서 html 표현시 소괄호
          <ul key={index}>
            <li>이름 : {el.name}</li>
            <li>가격 : {el.price}</li>
            <li>개수 : {el.number}</li>
          </ul>
        );
      })}
      {arr?.map((el, index) => {
        return <FunctionProps name={el.name} number={el.number} price={el.price} />;
      })}
      {!arr && <h1>배열이 전달되지 않았습니다.</h1>}
    </div>
  );
}
