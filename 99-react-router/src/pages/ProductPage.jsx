import React from "react";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  return (
    <>
      <h2>상품 페이지</h2>
      <ProductList products={products} />
    </>
  );
};

export default ProductPage;
