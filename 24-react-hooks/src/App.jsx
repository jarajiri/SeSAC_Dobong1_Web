import CustomHook from "./component/CustomHook";
import UseCallback from "./component/UseCallback";
import UseCallback2 from "./component/UseCallback2";
import UseMemo from "./component/UseMemo";
import UseMemoObj from "./component/UseMemoObj";
import UseReducer from "./component/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("React hook!");
  return (
    <>
      <h1>React Hook</h1>
      {/* <UseMemo /> */}
      {/* <UseMemoObj /> */}
      {/* <UseCallback /> */}
      {/* <UseCallback2 /> */}
      {/* <UseReducer /> */}
      <CustomHook />
    </>
  );
}

export default App;
