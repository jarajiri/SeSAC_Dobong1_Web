import React from "react";
import SkyblueButton from "../components/SkyblueButton";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { check, next } from "../store/modules/mbti";
import Progress from "../components/Progress";

const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const VS = styled.p`
  font-size: 2rem;
  padding-top: 1.5rem;
`;

const Mbti = () => {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);

  const dispatch = useDispatch();
  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((item, idx) => {
          return (
            <li key={`li${idx}`}>
              <SkyblueButton
                text={item.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(item.result));
                }}
              />
              {idx === 0 && <VS key={`VS${idx}`}>VS</VS>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
};

export default Mbti;
