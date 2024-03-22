import LifeCycleClass from "./component/LifeCycleClass";
import LifeCycleFunc from "./component/LifeCycleFunc";
import { RefClass1, RefClass2 } from "./component/RefClass";
import { RefFunction1, RefFunction2 } from "./component/RefFunction";
import Container from "./practice/Container";
import EffectEx1 from "./practice/EffectEx1";
import RefEx1 from "./practice/RefEx1";
import RefEx2 from "./practice/RefEx2";

function App() {
  return (
    <>
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunction1 />
    <RefFunction2 /> */}
      {/* <RefEx1 />
      <RefEx2 /> */}
      {/* <h1>LifeCycle</h1> */}
      {/* <LifeCycleClass/> */}
      {/* <LifeCycleFunc /> */}
      <Container>
        <EffectEx1 />
      </Container>
    </>
  );
}

export default App;
