import React, { useState } from "react";
import { GTodo } from "../../types/interface";
import GenericItem from "./GenericItem";

const GenericList = () => {
  const [numberTodos, setNumberTodos] = useState<GTodo<number>[]>([]);
  const [stringTodos, setStringTodos] = useState<GTodo<string>[]>([]);

  const addNumberTodo = () => {
    setNumberTodos([...numberTodos, { id: Date.now(), text: 10, done: false }]);
    console.log(numberTodos);
  };

  const addStringTodo = () => {
    setStringTodos([
      ...stringTodos,
      { id: Date.now(), text: "10", done: false },
    ]);
    console.log(stringTodos);
  };

  const toggleComplete = (id: number) => {
    setNumberTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    setStringTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <h4>number 추가</h4>
      <button onClick={addNumberTodo}>add number</button>
      <GenericItem todos={numberTodos} toggle={toggleComplete} />
      <h4>string 추가</h4>
      <button onClick={addStringTodo}>add string</button>
      <GenericItem todos={stringTodos} toggle={toggleComplete} />
    </div>
  );
};

export default GenericList;
