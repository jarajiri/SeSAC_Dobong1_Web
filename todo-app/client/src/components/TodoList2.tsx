import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, destroy, done, update } from "../store/module/todo";
import { ReduxState } from "../types/interface";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList2 = () => {
  const list = useSelector((state: ReduxState) => state.todo.list);
  const nextID = useSelector((state: ReduxState) => state.todo.nextID);
  const [editId, setEditId] = useState<number | null>(null); // 수정 중인 할 일의 ID
  const [editText, setEditText] = useState<string>(""); // 수정 중인 할 일의 텍스트

  const todoRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const todoList = list.filter((li) => li.done === false);

  const createTodo = () => {
    if (todoRef.current && todoRef.current.value.trim() !== "" && nextID) {
      dispatch(create({ id: nextID, text: todoRef.current.value }));
      axios.post(`${process.env.REACT_APP_API_SERVER}/todo`, {
        text: todoRef.current.value,
      });
      todoRef.current.value = "";
      todoRef.current.focus();
    }
  };
  const enterCreateTodo = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") createTodo();
  };
  const changeDone = async (todoId: number) => {
    console.log("changeDone의 todoId ===", todoId);
    dispatch(done(todoId));
    await axios.patch(`${process.env.REACT_APP_API_SERVER}/todo/${todoId}`);
  };

  const deleteTodo = async (id: number) => {
    dispatch(destroy(id));
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/todo/${id}`);
  };

  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const finishEdit = async (id: number) => {
    if (editId !== null && editText.trim() !== "") {
      // 수정된 내용을 dispatch하여 업데이트
      dispatch(update(editId, editText));
      // PATCH /api-server/content

      await axios.patch(`${process.env.REACT_APP_API_SERVER}/content`, {
        text: editText,
        id: editId,
      });
      setEditId(null);
      setEditText("");
    }
    // 수정 중인 할 일의 ID와 수정 중인 텍스트 초기화
  };

  return (
    <section className="TodoList">
      <h2>🕹️ 오늘의 할일</h2>
      <div>
        <input
          type="text"
          placeholder="Todo"
          ref={todoRef}
          onKeyDown={(e) => enterCreateTodo(e)}
        />
        <button onClick={createTodo}>할일 추가</button>
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              {editId === todo.id ? ( // 수정 중인 할 일인 경우
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => finishEdit(todo.id)}>적용</button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button onClick={() => changeDone(todo.id)}>완료</button>
                  <button onClick={() => startEdit(todo.id, todo.text)}>
                    수정
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <FontAwesomeIcon icon={faTrash} className="trashIcon" />
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList2;
