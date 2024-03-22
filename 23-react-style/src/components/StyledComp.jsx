import React from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0 5rem;
`;
const H4Title = styled.h4`
  background-color: purple;
  color: white;
  /* 780px 이하이면서, 기기 방향이 세로인 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    font-size: 30px;
    color: green;
  }
  /* 780px 이하이면서, 기기 방향이 가로인 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    font-size: 40px;
    color: red;
  }
`;
const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;
const rotate = keyframes`
      0%{
          transform: rotate(0);
      }
      50%{
          transform: rotate(180deg);
          background-color: white;
  
      }
      100%{
          transform: rotate(360deg);
  
      }
  `;
const Child = styled.span`
  color: white;
  border: 1px solid black;
  &:hover {
    color: red;
    cursor: pointer;
    animation: ${rotate} 1s infinite linear;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    color: yellow;
  }
`;

const StyledComp = () => {
  return (
    <Container>
      <H4Title>styled components 이용</H4Title>
      <ParentDiv>
        <Child>e1</Child>
        <Child>e2</Child>
        <Child>e3</Child>
      </ParentDiv>
    </Container>
  );
};

export default StyledComp;
