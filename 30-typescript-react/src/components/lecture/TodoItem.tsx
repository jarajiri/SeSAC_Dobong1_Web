import React from "react";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
interface Props {
  todo: Todo;
  toggle: (id: number) => void;
  //props로 함수를 받을 경우
}
const TodoItem = ({ todo, toggle }: Props) => {
  return (
    <li>
      <label>
        <input type="checkbox" onChange={() => toggle(todo.id)} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
