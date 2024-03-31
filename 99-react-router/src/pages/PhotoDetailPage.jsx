import React from "react";
import PhotoDetail from "../components/PhotoDetail";
import { useParams } from "react-router-dom";

const PhotoDetailPage = ({ photos }) => {
  const { photoId } = useParams();
  const [detailPhoto] = photos.filter((item) => item.id === Number(photoId));
  if (!detailPhoto)
    return (
      <>
        <h2>사진 상세 페이지</h2>
        <p>존재하지 않는 사진 입니다.</p>
      </>
    );
  return (
    <>
      <h2>사진 상세 페이지</h2>
      <PhotoDetail photo={detailPhoto} />
    </>
  );
};

export default PhotoDetailPage;
