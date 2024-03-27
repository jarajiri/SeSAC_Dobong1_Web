import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import StudentPage from "./pages/StudentPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/allie" element={<StudentPage name={"allie"} />} />
        <Route path="/student/codingon" element={<StudentPage name={"codingon"} />} />
        <Route path="/student/new" element={<StudentPage name={"new"} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
