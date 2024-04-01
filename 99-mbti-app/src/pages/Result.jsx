import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { reset } from "../store/modules/mbti";

const Header = styled.header`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: gray;
`;
const ResultText = styled.p`
  font-size: 2rem;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2rem;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

const Result = () => {
  const mbtiResult = useSelector((state) => state.mbti.mbtiResult);
  console.log(mbtiResult);
  const dispatch = useDispatch();
  const explanation = useSelector(
    (state) => state.mbti.explanations[mbtiResult]
  );
  return (
    <>
      <Header>결과</Header>
      <Explanation>{explanation.text}</Explanation>
      <ResultText>{mbtiResult}</ResultText>
      <Additional>이건 재미로 읽어보세요!</Additional>
      <AdditionalImg
        src={`${process.env.PUBLIC_URL}${explanation.img}`}
        alt="mbti 이미지"
      />
      <PinkButton
        text={"다시 검사하기"}
        clickEvent={() => dispatch(reset())}></PinkButton>
    </>
  );
};

export default Result;
