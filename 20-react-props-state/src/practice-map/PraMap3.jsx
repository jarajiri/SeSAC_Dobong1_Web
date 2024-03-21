import { useRef } from "react";
import { useState } from "react";

export default function PracticeMap3() {
  const [comment, setComment] = useState([
    { writer: "홍길동", title: "제목1" },
    { writer: "윤석렬", title: "제목2" },
    { writer: "이재명", title: "제목3" },
  ]);
  const [result, setResult] = useState([]);
  const [inputTitle, setInputTitle] = useState(""); // 작성자 등록 input
  const [inputWriter, setInputWriter] = useState(""); // 제목 등록 input

  const [inputSearch, setInputSearch] = useState(""); // 검색어 input
  const [searchType, setSearchType] = useState("writer"); // 검색타입 select

  const refWriter = useRef();
  const refTitle = useRef();

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const addComment = () => {
    let ref;
    if (inputWriter.length === 0) {
      ref = refWriter;
      return handleFocus(ref);
    }
    if (inputTitle.length === 0) {
      ref = refTitle;
      return handleFocus(ref);
    }

    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComment([...comment, newComment]);

    setInputTitle("");
    setInputWriter("");
  };

  //  검색 타입 설정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  // 실제 검색
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      //   console.log(item);
      //   console.log(item[searchType]);
      //   console.log(item[searchType].includes(inputSearch));
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }

      return item;
    });

    // console.log(searchResult);
    setResult(searchResult);
    setInputSearch("");
  };
  return (
    <div>
      {/* 등록폼 */}
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          ref={refWriter}
        />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          ref={refTitle}
        />

        <button onClick={addComment} type="button">
          작성
        </button>
      </form>

      {/* 검색폼 */}
      <form>
        <select onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      {/* 모든 데이터 table */}
      <table border={1} style={{ margin: "30px auto", width: "400px" }}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((co, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{co.title}</td>
                <td>{co.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 검색결과 */}
      {result.length === 0 ? (
        <h5>검색 결과가 없습니다.</h5>
      ) : (
        <table border={1} width={400} style={{ margin: "30px auto" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
