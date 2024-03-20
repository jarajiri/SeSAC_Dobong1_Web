import { useRef } from "react";
import { useState } from "react";

export default function RefEx2() {
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 10) + 1);
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 10) + 1);
  const [randomIdx, setRandomIdx] = useState(Math.floor(Math.random() * 3));
  const operators = ["+", "-", "*"];
  const [operator, setOperator] = useState(operators[randomIdx]);
  const [answer, setAnswer] = useState(0);
  const refInput = useRef();

  const submit = () => {
    let calculatedAnswer;
    switch (operator) {
      case "+":
        calculatedAnswer = number1 + number2;
        break;
      case "-":
        calculatedAnswer = number1 - number2;
        break;
      case "*":
        calculatedAnswer = number1 * number2;
        break;
      default:
        calculatedAnswer = 0;
    }

    console.log(calculatedAnswer);
    console.log(answer);
    if (parseInt(answer) === calculatedAnswer) {
      alert("정답");
      setNumber1(Math.floor(Math.random() * 10) + 1);
      setNumber2(Math.floor(Math.random() * 10) + 1);
      setRandomIdx(Math.floor(Math.random() * 3));
      setOperator(operators[randomIdx]);
      setAnswer(0);
    } else {
      alert("오답");
      setAnswer(0);
      refInput.current.focus();
    }
  };

  return (
    <>
      <h2>
        {number1}
        {operator}
        {number2}
      </h2>
      <input
        type="text"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        ref={refInput}
        value={answer}
      />
      <br />
      <button onClick={submit}>정답 제출</button>
    </>
  );
}
