export default function Select(props) {
  const { setData } = props;
  // const [data, setData] = useState({
  //   fruit: "apple",
  //   backgroud: "black",
  //   color: "white",
  //   content: "text",
  // });
  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          // 상태관리에서 prevState 인자는 초기값을 의미
          // console.log(e.target.value);
          setData((prevState) => {
            // fruit 값을 제외한 나머지는 전개연산자로 받아오고 과일 값만 변경
            return { ...prevState, fruit: e.target.value };
          });
        }}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, color: e.target.value };
          });
        }}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}
