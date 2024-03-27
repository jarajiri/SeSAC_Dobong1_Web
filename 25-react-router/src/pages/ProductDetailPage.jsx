import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  const navi = useNavigate();
  const { productId } = useParams();
  //   console.log(products);
  //   console.log(params);
  //   console.log(params.productId);
  //   console.log(productId);
  //   const targetProduct = products.filter((product) => product.id === Number(productId))[0];
  const [targetProduct] = products.filter((product) => product.id === Number(productId));

  console.log(targetProduct);
  // {postId, id(판매번호),name(상품명),body(상세설명),email(판매자)}
  if (!targetProduct) return <main>존재하지 않는 상품입니다.</main>;
  return (
    <>
      <p>상품 상세 페이지 !!</p>
      <button
        onClick={() => {
          navi("/");
        }}>
        홈으로 이동하기
      </button>
      <button
        onClick={() => {
          navi(-1);
        }}>
        뒤로가기
      </button>
      <ul>
        <li>판매 번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세설명 : {targetProduct.body}</li>
      </ul>
    </>
  );
};

export default ProductDetailPage;
