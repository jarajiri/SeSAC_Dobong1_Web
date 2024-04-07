import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../types/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { del, done } from "../store/module/todo";
import axios from "axios";

const DoneList = () => {
  const list = useSelector((state: ReduxState) => state.todo.list);

  const dispatch = useDispatch();

  const deleteTodo = async (id: number) => {
    // console.log(id);
    dispatch(del(id));
    // console.log(list);
    // 백단에 요청 보내기
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/todo/${id}`);
  };

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
          {doneList.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <span>
                  <button
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
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
