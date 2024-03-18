import "./App.css";
import { ClassProps } from "./components/ClassProps";
import { ClassProps2 } from "./components/ClassProps";
import { FunctionProps } from "./components/FunctionProps";
import { FunctionProps2 } from "./components/FunctionProps";

function App() {
  return (
    <>
      <h1>Hello props!</h1>
      <ClassProps name="루피" color="pink" nickname="공주"></ClassProps>
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치"></ClassProps>
      <ClassProps2 name="포비" color="white" nickname="곰" bgColor="black"></ClassProps2>
      <FunctionProps name="수박" number={5} price={1000}></FunctionProps>
      <FunctionProps2 price={50000}></FunctionProps2>
    </>
  );
}

export default App;
