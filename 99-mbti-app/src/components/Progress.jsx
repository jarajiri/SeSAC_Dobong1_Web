import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  margin-top: 3rem;
`;
const Fill = styled.div`
  background-color: #777;
  width: 100%;
  height: 10px;
`;
const Guage = styled.div`
  background-color: #4ae7e7;
  height: 100%;
  width: ${(props) => props.$percent}%;
  transition: 0.4s;
`;

const Progress = ({ page, maxPage }) => {
  return (
    <ProgressContainer>
      <div>
        {page}/{maxPage}
      </div>
      <Fill>
        <Guage $percent={(page / maxPage) * 100}></Guage>
      </Fill>
    </ProgressContainer>
  );
};

export default Progress;
