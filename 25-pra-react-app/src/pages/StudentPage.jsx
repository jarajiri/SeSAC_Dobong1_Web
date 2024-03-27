import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const StudentPage = ({ name }) => {
  const navi = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("name");
  return (
    <>
      <p>학생 이름은 {name}입니다.</p>
      {search && <p>실제 학생 이름은 {search}</p>}
      <button
        onClick={() => {
          navi(-1);
        }}>
        이전 페이지로
      </button>
    </>
  );
};

export default StudentPage;
