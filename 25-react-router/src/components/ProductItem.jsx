import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <>
      <Link className="productItem" to={`/products/${product.id}`}>
        <ul>
          <li>상품명 : {product.name}</li>
          <li>상품설명 : {product.body.slice(0, 80)}</li>
        </ul>
      </Link>
    </>
  );
};

export default ProductItem;
