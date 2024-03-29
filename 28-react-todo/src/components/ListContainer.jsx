import React from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

const ListContainer = () => {
  return (
    <div className="ListContainer">
      <TodoList />
      <DoneList />
    </div>
  );
};

export default ListContainer;
