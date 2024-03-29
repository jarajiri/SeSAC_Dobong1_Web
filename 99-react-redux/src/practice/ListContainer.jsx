import React from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

const ListContainer = () => {
  return (
    <>
      <TodoList />
      <DoneList />
    </>
  );
};

export default ListContainer;
