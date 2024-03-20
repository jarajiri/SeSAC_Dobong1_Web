import apple from "./apple.jpg";
import bananas from "./bananas.jpg";
import grapes from "./grapes.jpg";
import peaches from "./peaches.jpg";
function Result({ fruit, bgColor, fontColor, content }) {
  return (
    <>
      <img style={{ width: "200px" }} src={fruit === "apple" ? apple : fruit === "banana" ? bananas : fruit === "grape" ? grapes : peaches} alt="과일" />
      <div style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}>{content}</div>
    </>
  );
}
export default Result;
