import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyHeader = styled.header`
  background-color: rgb(218, 236, 236);
  display: flex;
  justify-content: right;
  align-items: center;
  height: 80px;
`;
const MyLink = styled(Link)`
  margin: 0 8px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <MyHeader>
      <MyLink to="/">홈으로</MyLink>
      <MyLink to="/student/allie">학생</MyLink>
      <MyLink to="/student/codingon">코딩온</MyLink>
      <MyLink to="/student/new?name=jisoo">query</MyLink>
    </MyHeader>
  );
};

export default Header;
