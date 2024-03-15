import "./App.css";
import UseJSX from "./UseJSX.js";
//css import시 하위에 있는 컴포넌트 모두에 적용된다.
function App() {
  return (
    <div>
      <h1>JSX 문법 배우기</h1>
      <UseJSX></UseJSX>
    </div>
  );
}

export default App;
