import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <>
      <p>상품 상세</p>
      <ul>
        <li>상품 아이디 : {product.id}</li>
        <li>상품 이름 : {product.name}</li>
        <li>이메일 : {product.email}</li>
        <li>상품 내용 : {product.body}</li>
      </ul>
    </>
  );
};

export default ProductDetail;
