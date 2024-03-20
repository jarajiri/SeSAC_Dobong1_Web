import Select from "./Select";
import Input from "./Input";
import Result from "./Result";
import { useState } from "react";
export default function EntirePractice() {
  // state를 오브젝트로 관리하기
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <h1>실습 문제</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {/* select box */}
        {/* props로 함수도 넘길 수 있음 */}
        <Select setData={setData} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {/* input */}
        <Input setData={setData} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {/* 결과화면 */}
        <Result data={data} />
      </div>
    </div>
  );
}
