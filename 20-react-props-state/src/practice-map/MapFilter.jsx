import React, { useRef, useState } from "react";

const MapFilter = () => {
  const [userList, setUserList] = useState([
    { id: 1, name: "코디", email: "codee@test.com" },
    { id: 2, name: "allie", email: "allie@test.com" },
  ]);

  const [inputName, setIntputName] = useState("");
  const [inputEmail, setIntputEmail] = useState("");

  const addUser = () => {
    setUserList([
      ...userList,
      {
        id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
        name: inputName,
        email: inputEmail,
      },
    ]);
    console.log(userList);
  };

  const removeUser = (id) => {
    setUserList(
      userList.filter((user) => {
        return user.id !== id;
      })
    );
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setIntputName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => {
          setIntputEmail(e.target.value);
        }}
      />
      <button type="button" onClick={addUser}>
        등록
      </button>
      {userList.map((user) => {
        return (
          <p key={user.id} onDoubleClick={() => removeUser(user.id)}>
            {user.name}:{user.email}
          </p>
        );
      })}
    </>
  );
};

const MapFilter2 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "제목1",
      writer: "작성자1",
    },
    {
      id: 2,
      title: "제목2",
      writer: "작성자2",
    },
    {
      id: 3,
      title: "제목3",
      writer: "작성자3",
    },
  ]);

  const [searchData, setSearchData] = useState([]);

  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [searchType, setSearchType] = useState("writer");
  const [searchText, setSearchText] = useState("");
  const titleRef = useRef();
  const writerRef = useRef();

  const addData = () => {
    let ref;
    if (title.trim().length === 0) {
      ref = titleRef;
      return handleFocus(ref);
    } else if (writer.trim().length === 0) {
      ref = writerRef;
      return handleFocus(ref);
    }
    setData([
      ...data,
      {
        id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
        title,
        writer,
      },
    ]);
  };

  const searchingData = () => {
    let result = data.filter((item) => {
      if (!item[searchType].includes(searchText) || searchText === "") return null;
      return item;
    });
    setSearchData(result);
  };

  const handleFocus = (ref) => {
    ref.current.focus();
  };
  return (
    <>
      <hr />
      {/* 입력창 */}
      <fieldset>
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => {
            setWriter(e.target.value);
          }}
          ref={writerRef}
        />
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          ref={titleRef}
        />
        <button onClick={addData}>작성</button>
      </fieldset>
      {/* 검색창 */}
      <fieldset>
        <select
          onChange={(e) => {
            setSearchType(e.target.value);
          }}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button type="button" onClick={searchingData}>
          검색
        </button>
      </fieldset>
      {/* 목록창 */}
      <fieldset>
        <table border={1}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </fieldset>
      {/* 검색 결과창 */}
      {searchData.length === 0 ? (
        <h5>검색 결과 없음</h5>
      ) : (
        <fieldset>
          <table border={1}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {searchData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </fieldset>
      )}
    </>
  );
};

export { MapFilter, MapFilter2 };
