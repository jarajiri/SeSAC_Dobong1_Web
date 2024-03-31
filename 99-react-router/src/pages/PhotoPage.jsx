import React from "react";
import PhotoList from "../components/PhotoList";

const PhotoPage = ({ photos }) => {
  return (
    <>
      <h2>사진 페이지</h2>
      <PhotoList photos={photos} />
    </>
  );
};

export default PhotoPage;
