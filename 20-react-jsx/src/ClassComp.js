import { Component } from "react";

export default class ClassComp extends Component {
  render() {
    const name = "김성민";
    return (
      <div style={{ border: "1px solid greenyellow", background: "green" }}>
        <div>안녕하세요</div>
        <div>클래스 컴포넌트 입니다.</div>
        <div>제 이름은 {name}입니다.</div>
      </div>
    );
  }
}
