import ClassComp from "./ClassComp";

export default function UseJSX() {
  /*   // 내보내기할 컴포넌트가 하나일 경우 default
  const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "grey",
    textAlign: "center",
    color: "green",
    marginTop: ".5rem",
    display: "inline-line",
    border: "1px solid red",
  };
  // 인라인 스타일 적용
  return (
    <div>
      <div style={{ color: "#fff", width: "100px", background: "tomato" }}>first</div>
      <div style={divStyle}>second</div>
      <div style={divStyle}>third</div>
      <div style={divStyle}>fourth</div>
    </div>
  ); */

  // 2.JS 문법 사용해보기
  let isShow = false;
  function myFunc() {
    alert("해위");
  }
  function addNumber(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* {<span>{myFunc()}</span>} */}
      <div
        style={{ background: "orange" }}
        onClick={() => {
          alert("눌렀음");
        }}>
        {isShow ? "true일때보임" : "!!!"}
      </div>
      <div style={{ background: "red" }}>{isShow && "true일때보임"}</div>
      <div style={{ background: "skyblue" }} onClick={myFunc}>
        {isShow === false ? "isShow가 false입니다" : "true입니다"}
      </div>
      <div style={{ background: "purple" }}>{!isShow && "false일때 보임"}</div>

      <div onClick={() => addNumber(8, 5)}>8+5의 결과는 ?</div>
      <div onClick={() => myFunc()}>myFunc</div>
      <br></br>
      <br></br>
      <ClassComp />
      <br></br>
      <hr></hr>
      <div className="div"></div>
    </div>
  );
}
