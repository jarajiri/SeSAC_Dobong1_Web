import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>page not found</h2>
      <Link to="/">홈으로 이동하기</Link>
    </>
  );
};

export default NotFound;
