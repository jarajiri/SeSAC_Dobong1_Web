import Start from "./components/Start";
import Practice1 from "./components/Practice1";
import "./styles/chat.css";
import Chatting1 from "./components/Chatting1";
import "bootstrap/dist/css/bootstrap.css";
import Chatting2 from "./components/Chatting2";
import Chatting3 from "./components/Chatting3";
import Chatting4 from "./components/Chatting4";
function App() {
  return (
    <div className="App">
      <h2>socket.io 사용 With React</h2>
      {/* <Start /> */}
      {/* <Practice1 /> */}
      {/* <Chatting1 /> */}
      {/* <Chatting2 /> */}
      {/* <Chatting3 /> */}
      <Chatting4 />
    </div>
  );
}

export default App;
