import React from "react";
import { GTodo } from "../../types/interface";

interface Props<T> {
  todos: GTodo<T>[]; // 수정된 부분
  toggle: (id: number) => void;
}

const GenericItem = <T,>({ todos, toggle }: Props<T>) => {
  // 수정된 부분
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input type="checkbox" onChange={() => toggle(todo.id)} />
            {String(todo.text)}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default GenericItem;
