import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>홈으로 </Link>
      <Link to={"/products"}>상품페이지 </Link>
      <Link to={"/photos"}>사진페이지 </Link>
    </header>
  );
};

export default Header;
