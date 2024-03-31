import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const [detailProduct] = products.filter((item) => item.id === Number(productId));

  if (!detailProduct)
    return (
      <>
        <h2>상품 상세 페이지</h2>
        <p>존재하지 않는 상품입니다.</p>
      </>
    );
  return (
    <>
      <h2>상품 상세 페이지</h2>
      <ProductDetail product={detailProduct} />
    </>
  );
};

export default ProductDetailPage;
