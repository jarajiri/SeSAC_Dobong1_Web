import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <>
      <p>상품리스트</p>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
