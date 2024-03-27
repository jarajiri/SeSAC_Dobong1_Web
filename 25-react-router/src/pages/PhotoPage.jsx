import React from "react";

const PhotoPage = ({ photos }) => {
  console.log(photos);
  return (
    <main className="photoPage">
      <p>사진 목록입니다!!</p>
      {photos.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>
              <img src={item.url} alt="img" />
            </li>
          </ul>
        );
      })}
    </main>
  );
};

export default PhotoPage;
