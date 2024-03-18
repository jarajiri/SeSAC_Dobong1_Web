import img from "../abc.svg";
export function PropsPra1(props) {
  const propsColor = {
    color: props.color,
  };
  return (
    <>
      <h1>
        제가 좋아하는 음식은 <span style={propsColor}>{props.food}</span>입니다.
      </h1>
    </>
  );
}

PropsPra1.defaultProps = {
  food: "한식",
};

export function PropsPra2({ title, author, price, type }) {
  return (
    <div className="pra2">
      <h1 style={{ color: "orange" }}>이번주 베스트 셀러</h1>
      <img src={img} alt="로켓펀치" />
      <h3>{title}</h3>
      <p>저자 : {author}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
    </div>
  );
}

export function PropsPra3({ text, valid }) {
  return (
    <>
      <div>{text}</div>
      <button
        onClick={() => {
          console.log(valid);
        }}>
        alert
      </button>
    </>
  );
}

PropsPra3.defaultProps = {
  text: "이건 기본 text props 입니다.",
};
