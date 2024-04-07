import React, { useEffect } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import axios from "axios";
import { useDispatch } from "react-redux";
import { init } from "../store/module/todo";
import TodoList2 from "./TodoList2";

const ListContainer = () => {
  // 백엔드 서버로 axios 요청
  async function getTodoAll() {
    const res = await axios.get(`${process.env.REACT_APP_API_SERVER}/todos`);
    console.log(res.data);
    if (res.data) dispatch(init(res.data));
  }

  useEffect(() => {
    getTodoAll();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="ListContainer">
      {/* <TodoList /> */}
      <TodoList2 />
      <DoneList />
    </div>
  );
};

export default ListContainer;
