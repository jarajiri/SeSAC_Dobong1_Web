import styled from "styled-components";
import Start from "./pages/Start";
import Mbti from "./pages/Mbti";
import { useSelector } from "react-redux";
import GlobalStyle from "./components/GlobalStyle";
import Result from "./pages/Result";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  console.log(page);

  const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page === survey.length + 1 ? (
          <Result />
        ) : (
          <Mbti />
        )}
      </Main>
    </>
  );
}

export default App;
