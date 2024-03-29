import { ThemeContext } from "./contexts/ThemeContext";
import Box from "./components/Box";
import Profile from "./components/Profile";
import AgeProvider from "./components/provider/AgeProvider";
import NameProvider from "./components/provider/NameProvider";
function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(20);

  return (
    <div className="App">
      <h2>context API!!</h2>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      {/* state 저장해보기 */}
      <AgeProvider>
        <NameProvider>
          <Profile />
        </NameProvider>
      </AgeProvider>
    </div>
  );
}

export default App;
