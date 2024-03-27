import React from "react";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [modeParams, setModeParams] = useSearchParams();
  console.log(modeParams.get("mode"));
  const mode = modeParams.get("mode");
  return (
    <>
      {/* mode 가 dark면 className으로 dark 추가, scss에서 dark 클래스에 대한 스타일 추가  */}
      {/* <main className={`mainPage ${modeParams.get('mode')}`}> */}
      {mode === "dark" ? (
        <main className="mainPage dark">
          <h2>여기는 홈입니다.</h2>
          <button
            onClick={() => {
              setModeParams({ mode: "none" });
            }}>
            다크 모드
          </button>
        </main>
      ) : (
        <main className="mainPage">
          <h2>여기는 홈입니다.</h2>
          <button
            onClick={() => {
              setModeParams({ mode: "dark" });
            }}>
            다크 모드
          </button>
        </main>
      )}
    </>
  );
};

export default MainPage;
