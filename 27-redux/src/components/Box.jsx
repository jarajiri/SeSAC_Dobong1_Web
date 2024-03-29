// App > Box1 > Box2

import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";
import { changeData } from "../store/module/isDataReducer";

export const Box1 = () => {
  return (
    <div style={{ border: "1px dashed pink", padding: "10px" }}>
      <h3>box1</h3>
      <Box2 />
    </div>
  );
};
export const Box2 = () => {
  // const state = useSelector((state) => state);
  // 노란색 워닝뜸,, 전체 스테이트 가져올때 사용

  // 나눠서 가져오기
  const isData = useSelector((state) => state.isData);
  const counter = useSelector((state) => state.counter);
  //   console.log(isData);
  //   console.log(counter);

  const dispatch = useDispatch();

  return (
    <div style={{ border: "1.5px solid skyblue", padding: "10px" }}>
      <h3>box2</h3>
      <p>count : {counter}</p>
      <p>isData : {isData.toString()}</p>
      {/* boolean값을 문자열로 변경 */}
      <button onClick={() => dispatch({ type: "counter/INCREMENT" })}>count + 1</button>
      <button onClick={() => dispatch({ type: "counter/DECREMENT" })}>count - 1</button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>to {(!isData).toString()}</button>
      <br />
      {/* type 값에 문자열 말고 다른 방식 */}
      <button onClick={() => dispatch(countPlus())}>count + 1</button>
      <button onClick={() => dispatch(countMinus())}>count - 1</button>
      <button onClick={() => dispatch(changeData())}>to {(!isData).toString()}</button>
    </div>
  );
};
