import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/module/todo";
import { ReduxState } from "../types/interface";
import axios from "axios";

const TodoList = () => {
  const list = useSelector((state: ReduxState) => state.todo.list);
  //   console.log(list);
  const todoList = list.filter((li) => li.done === false);
  //   console.log(todoList);

  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement>(null);
  const nextID = useSelector((state: ReduxState) => state.todo.nextID);

  // post 요청
  async function postTodo() {
    const text = todoRef.current?.value;
    if (text && text.trim() != "") {
      const res = await axios.post(`${process.env.REACT_APP_API_SERVER}/todo`, {
        text: todoRef.current?.value !== "" && todoRef.current?.value,
      });
      console.log(res.data);
    }
  }

  const createTodo = () => {
    // dispatch({
    //     type: "todo/CREATE",
    //     payload: { id: 3, text: todoRef.current.value }
    //     });
    // dispatch(create({ id: list.length, text: todoRef.current.value }));

    // 프론트 상태관리
    if (nextID && todoRef.current) {
      dispatch(create({ id: nextID, text: todoRef.current.value })); //todo.js에서 관리하는 방법으로 id값 적용
      todoRef.current.value = "";
    }
    // postTodo() 함수 호출
    postTodo();
  };

  return (
    <section className="TodoList">
      <h2>🕹️ 오늘의 할일</h2>
      <div>
        <input type="text" placeholder="Todo" ref={todoRef} />
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
              <button onClick={() => dispatch(done(todo.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
