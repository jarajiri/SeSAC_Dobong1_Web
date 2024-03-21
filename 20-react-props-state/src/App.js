import "./App.css";
import { MapFilter, MapFilter2 } from "./practice-map/MapFilter";
// import Alphabet from "./components/Alphabet";
// import { ClassProps } from "./components/props/ClassProps";
// import { ClassProps2 } from "./components/props/ClassProps";
// import { FunctionProps } from "./components/FunctionProps";
// import { FunctionProps2 } from "./components/FunctionProps";
// import { PropsPra1 } from "./components/PropsPra";
// import { PropsPra2 } from "./components/PropsPra";
// import { PropsPra3 } from "./components/PropsPra";
// import ClassState from "./components/ClassState";
// import FunctionSate from "./components/FunctionState";
// import { StatePra1 } from "./components/StatePra";
// import { PororoObj } from "./components/PororoObj";
// import { ChangeObj } from "./components/ChangeObj";
// import PropsMap from "./components/PropsMap";
import PraMap3 from "./practice-map/PraMap3";
// import PraMapE from "./practice-map/PraMapE";

function App() {
  // const my_func = () => {
  //   console.log("콘솔 띄우기 성공");
  // };
  // const dataArr = [
  //   { name: "peach", number: 5, price: 5000 },
  //   { name: "banana", number: 1, price: 3000 },
  //   { name: "apple", number: 10, price: 7000 },
  //   { name: "grape", number: 2, price: 8500 },
  // ];
  return (
    <div className="App">
      {/* <PraMap3 /> */}
      <MapFilter2 />
      {/* <MapFilter /> */}
      {/* <PraMapE /> */}
      {/* <h1>map && filter</h1> */}
      {/* <PropsMap /> */}
      {/* <hr /> */}
      {/* <h1>alphabet</h1> */}
      {/* <Alphabet />  */}
      {/* <PropsMap  arr={dataArr}/> */}
      {/* <h1>Hello props!</h1> */}
      {/* <ClassProps name="루피" color="pink" nickname="공주"></ClassProps> */}
      {/* <ClassProps name="뽀로로" color="blue" nickname="사고뭉치"></ClassProps> */}
      {/* <ClassProps2 name="포비" color="white" nickname="곰" bgColor="black"></ClassProps2> */}
      {/* <FunctionProps name="수박" number={5} price={1000}></FunctionProps> */}
      {/* <FunctionProps2 price={50000}></FunctionProps2> */}
      {/* <FunctionProps2 name="딸기" price={10000}>
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section> */}
      {/* </FunctionProps2> */}
      {/* <PropsPra1 food="피자" color="red"></PropsPra1> */}
      {/* <PropsPra2 title="나의 하루는 4시 40분에 시작된다" author="김유진" price={13500} type="자기계발서"></PropsPra2> */}
      {/* <PropsPra3 text={22} valid={my_func}></PropsPra3> */}
      {/* <ClassState /> */}
      {/* <FunctionSate /> */}
      {/* <h1>연습문제</h1> */}
      {/* <StatePra1 /> */}
      {/* <PororoObj /> */}
    </div>
  );
}

export default App;
