import React from "react";

const PhotoDetail = ({ photo }) => {
  return (
    <>
      <p>사진 상세</p>
      <ul>
        <img src={photo.url} alt="사진" style={{ width: "400px" }} />
        <li>앨범 아이디 : {photo.albumId}</li>
        <li>아이디 : {photo.id}</li>
        <li>제목 : {photo.title}</li>
      </ul>
    </>
  );
};

export default PhotoDetail;
