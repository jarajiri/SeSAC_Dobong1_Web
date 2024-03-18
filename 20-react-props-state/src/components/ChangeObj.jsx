import { useState } from "react";

export default function ChangeObj(props) {
  console.log(props.objArr);
  const { objArr } = props;
  const [idx, setIdx] = useState(0);

  function changeMember() {
    setIdx(idx + 1);
    if (idx === objArr.length - 1) setIdx(0);
  }
  return (
    <>
      <div>이름 : {objArr[idx].name}</div>
      <div>나이 : {objArr[idx].age}</div>
      <div>별명 : {objArr[idx].nickName}</div>
      <button onClick={changeMember}>멤버 바꾸기 </button>
    </>
  );
}
