import React from "react";
import { useSelector } from "react-redux";

const DoneList = () => {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((li) => li.done === true);

  return (
    <section className="DoneList">
      <h2>✅ 완료한 일</h2>
      <ul>
        {/* <li>done 1</li> */}
        {doneList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DoneList;
