import "./App.css";
// import { ClassProps } from "./components/ClassProps";
// import { ClassProps2 } from "./components/ClassProps";
// import { FunctionProps } from "./components/FunctionProps";
// import { FunctionProps2 } from "./components/FunctionProps";
// import { PropsPra1 } from "./components/PropsPra";
// import { PropsPra2 } from "./components/PropsPra";
// import { PropsPra3 } from "./components/PropsPra";
// import ClassState from "./components/ClassState";
// import FunctionSate from "./components/FunctionState";
import { StatePra1 } from "./components/StatePra";
import { PororoObj } from "./components/PororoObj";
import { ChangeObj } from "./components/ChangeObj";

function App() {
  return (
    <>
      {/* <h1>Hello props!</h1> */}
      {/* <ClassProps name="루피" color="pink" nickname="공주"></ClassProps>
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치"></ClassProps>
      <ClassProps2 name="포비" color="white" nickname="곰" bgColor="black"></ClassProps2>
      <FunctionProps name="수박" number={5} price={1000}></FunctionProps>
      <FunctionProps2 price={50000}></FunctionProps2>
      <FunctionProps2 name="딸기" price={10000}>
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2> */}
      {/* pros 실습 */}
      {/* <PropsPra1 food="피자" color="red"></PropsPra1>
      <PropsPra2 title="나의 하루는 4시 40분에 시작된다" author="김유진" price={13500} type="자기계발서"></PropsPra2>
      <PropsPra3 text="필수 props" valid="콘솔 띄우기 성공!!"></PropsPra3> */}
      {/* <ClassState />
      <FunctionSate /> */}
      <h1>연습문제</h1>
      <StatePra1 />
      <PororoObj />
    </>
  );
}

export default App;
