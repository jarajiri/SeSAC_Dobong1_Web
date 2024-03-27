import React from "react";
import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  //   console.log(products);
  return (
    <main className="productPage">
      <p>상품 목록입니다!!</p>
      <ProductList products={products} />
    </main>
  );
};

export default ProductPage;
