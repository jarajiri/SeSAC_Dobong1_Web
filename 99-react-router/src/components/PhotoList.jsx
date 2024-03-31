import React from "react";
import { Link } from "react-router-dom";

const PhotoList = ({ photos }) => {
  return (
    <>
      <p>사진 리스트</p>
      <ul>
        {photos.map((item) => {
          return (
            <Link to={`/photos/${item.id}`} key={item.id}>
              <li key={item.id}>
                <span>{item.title}</span>
                <br />
                <img src={item.thumbnailUrl} alt="사진" />
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default PhotoList;
