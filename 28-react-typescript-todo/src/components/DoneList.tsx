import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DoneList = () => {
  const list = useSelector((state: ReduxState) => state.todo.list);
  const doneList = list.filter((li) => li.done === true);

  return (
    <section className="DoneList">
      <h2>✅ 완료한 일</h2>
      {doneList.length === 0 ? (
        <>
          <ul>
            <li>완료한일이 없는데요?</li>
          </ul>
        </>
      ) : (
        <ul>
          {/* <li>done 1</li> */}
          {doneList.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <span>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default DoneList;
