// State 사용 안한 예제
// export default function FunctionSate() {
//   let apple = "사과";
//   function inEnglish() {
//     apple = "apple";
//     console.log("변수값", apple);
//   }
//   return (
//     <div>
//       <div style={{ background: "red", color: "white" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// State 사용 !!
// import { useState } from "react";

// export default function FunctionSate() {
//   const [apple, setApple] = useState("사과");

//   function inEnglish() {
//     setApple("apple"); // setter 함수로 apple값 변경
//     console.log("state=====", apple);
//   }
//   return (
//     <div>
//       <div style={{ background: "red", color: "white" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// 바닐라 JS로 사과 > apple > 사과 변경해보기
// export default function FunctionSate() {
//   function changeLaguage() {
//     const apple = document.querySelector(".state div");
//     apple.innerText === "사과" ? (apple.innerText = "apple") : (apple.innerText = "사과");
//   }
//   return (
//     <div className="state">
//       <div className="fruit" style={{ background: "red", color: "white" }}>
//         사과
//       </div>
//       <button onClick={changeLaguage}>언어 바꾸기</button>
//     </div>
//   );
// }

// useState 사용해서 언어변경 해보기
import { useState } from "react";

export default function FunctionSate() {
  const [isEnglish, setIsEnglish] = useState(true);

  function changeLaguage() {
    setIsEnglish(!isEnglish);
  }
  return (
    <div>
      <div style={{ background: "red", color: "white" }}>{isEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLaguage}>{isEnglish ? "한글" : "영어"}</button>
    </div>
  );
}
