import { RefClass1, RefClass2 } from "./component/RefClass";
import { RefFunction1, RefFunction2 } from "./component/RefFunction";
import RefEx1 from "./practice/RefEx1";
import RefEx2 from "./practice/RefEx2";

function App() {
  return (
    <>
      <h1>ref</h1>
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunction1 />
      <RefFunction2 /> */}
      <RefEx1 />
      <RefEx2 />
    </>
  );
}

export default App;
