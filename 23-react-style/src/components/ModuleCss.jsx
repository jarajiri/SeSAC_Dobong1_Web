import React from "react";
import Names from "classnames/bind";
import style from "../styles/style.module.css";
import classNames from "classnames";

const ModuleCss = () => {
  const setting = Names.bind(style);
  const isTrue = true;
  const value = "first";
  return (
    <>
      <h4>module.css 이용</h4>
      <div className={style.container}>
        <div className={style.box2}>
          <div>안녕하세요</div>
        </div>
        <br />
        <div className={`${style.first} ${style.second}`}>클래스 여러개 지정1(백틱)</div>
        <div className={[style.first, style.second].join(" ")}>클래스 여러개 지정2(join)</div>
        <div className={classNames(style.first, style.second)}>classnames 메소드 이용(install 필요)</div>
        <div className={setting("first", "second")}>classnames 모듈 사용1</div>
        <div className={setting("first", { second: false })}>classnames 모듈 사용2</div>
        <div className={setting(value, { second: isTrue })}>classnames 모듈 사용3</div>
      </div>
    </>
  );
};

export default ModuleCss;
