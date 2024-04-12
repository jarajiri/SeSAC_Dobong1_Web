import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, destroy, done } from "../store/module/todo";
import { ReduxState } from "../types/interface";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const list = useSelector((state: ReduxState) => state.todo.list);

  const todoList = list.filter((li) => li.done === false);

  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement>(null);
  const nextID = useSelector((state: ReduxState) => state.todo.nextID);

  /* createTodo: 할일 추가 */
  const createTodo = () => {
    // dispatch({
    //     type: "todo/CREATE",
    //     payload: { id: 3, text: todoRef.current.value }
    //     });
    // dispatch(create({ id: list.length, text: todoRef.current.value }));

    // 1. POST /todo
    // 2. dispatch이용해서 프론트 변경

    // input value 빈값 검사 > reducer에서 컴포넌트로 변경
    // why? 백으로 요청할 때도 빈값은 보내지 않아야 하기 때문
    if (todoRef.current && todoRef.current.value.trim() !== "" && nextID) {
      // 화면 변경을 위한 dispatch
      dispatch(create({ id: nextID, text: todoRef.current.value }));
      // DB 변경을 위한 post 요청
      axios.post(`${process.env.REACT_APP_API_SERVER}/todo`, {
        text: todoRef.current.value,
      });

      // input value 비우기
      todoRef.current.value = "";
      todoRef.current.focus();
    }
  };
  /* enterCreateTodo: [enter]키 눌렀을 때 할일 추가 */
  const enterCreateTodo = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") createTodo();
  };
  /* changeDone: 특정 todo의 done값 변경 */
  const changeDone = async (todoId: number) => {
    console.log(todoId);
    dispatch(done(todoId));
    await axios.patch(`${process.env.REACT_APP_API_SERVER}/todo/${todoId}`);
  };
  /* deleteTodo: 특정 todo 삭제 */
  const deleteTodo = async (id: number) => {
    // console.log(id);
    dispatch(destroy(id));
    // console.log(list);
    // 백단에 요청 보내기
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/todo/${id}`);
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
        {/* <li>
          <span>todo1 </span>
          <button>완료</button>
        </li> */}
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text} </span>
              {/* <button onClick={()=>dispatch({type:'todo/DONE',id:todo.id})}>완료</button> */}
              <button onClick={() => changeDone(todo.id)}>완료</button>
              {/* 수정 버튼을 눌렀을때 input창이 수정하기로 바뀌면서 내용 */}
              <button>수정</button>
              <button onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} className="trashIcon" />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
