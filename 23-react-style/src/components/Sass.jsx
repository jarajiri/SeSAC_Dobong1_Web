import React from "react";
import "../styles/scssComponent.scss";
import "../styles/PraScss.scss";
import crazy from "../assets/crazy.webp";
const Sass = () => {
  return (
    <>
      {/* <h4>sass 사용</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">B1</button>
        <button className="btn btn--opacity">B2</button>
        <button className="btn btn--blue">B3</button>
      </div> */}
      {/* .container>.box1*3+p.cirle*3+.box2{hi$}*4 */}
      {/* <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">hi1</div>
        <div className="box2">hi2</div>
        <div className="box2">hi3</div>
        <div className="box2">hi4</div>
      </div> */}

      {/* <h2>이미지 가져오기</h2>
      <h4>1. src 폴더 내부에 이미지 저장</h4>
      <h5>상대경로로 불러오기</h5>
      <img src="../assets/crazy.webp" alt="src 내부에 이미지가 있을 때는 경로명으로 접근 불가능!!" />
      <h5>이미지 import 해서 가져오기</h5>
      <img src={crazy} alt="import 후 가지고 오기" />
      <h5>css파일에서 이미지 접근(background-image 속성)</h5>
      <div className="src-img img-test"></div>
      <hr />
      <h4>2. public 폴더에 이미지 저장</h4>
      <h5>img 태그 사용하기</h5>
      <img src="/assets/crazy.webp" alt="경로명으로 접근가능, public 폴더" />
      <img src={process.env.PUBLIC_URL + "/assets/crazy.webp"} alt="경로명으로 접근가능, public 폴더" />
      <h5>css파일에서 이미지 접근(background-image 속성)</h5>
      <div className="img-test public-img"></div>

      <h2>사진 넣기 실습 with sass</h2>
      <div className="practice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <hr />
      <h2>애벌레</h2>
      <div className="practice1">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="grass"></div>
      </div> */}

      <div>
        <h2>실습2</h2>
        <div className="practice2">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="circles">
        <div className="circle pink"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
    </>
  );
};

export default Sass;
