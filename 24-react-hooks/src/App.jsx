import CustomHook from "./component/CustomHook";
import UseCallback from "./component/UseCallback";
import UseCallback2 from "./component/UseCallback2";
import Form from "./component/UseForm";
import UseMemo from "./component/UseMemo";
import UseMemoObj from "./component/UseMemoObj";
import UseReducer from "./component/UseReducer";
import useTitle from "./hooks/useTitle";
import FormPractice from "./practice/FormPractice";
import PraUseForm from "./practice/PraUseForm";

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
      <Form />
      <PraUseForm />
      <FormPractice />
    </>
  );
}

export default App;
