import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const allList = useSelector((state) => state.todo.list);
  // 전체리스트
  const todoList = allList.filter((item) => item.done === false);
  // 할일 목록

  const dispatch = useDispatch();
  const todoRef = useRef();
  return (
    <section>
      <h2>TO DO</h2>
      <div>
        <input type="text" ref={todoRef} />
        <button
          onClick={() => {
            dispatch({
              type: "todo/CREATE",
              payload: {
                id: allList.length,
                text: todoRef.current.value,
              },
            });
            todoRef.current.value = "";
          }}>
          추가
        </button>
      </div>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => {
                  dispatch({ type: "todo/DONE", id: item.id });
                }}>
                done
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
