import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoList = () => {
  // todo 리스트 전체를 담을 state
  const [todos, setTodos] = useState<Todo[]>([]);
  // 새로운 todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");

  const todoInput = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (todoInput.current) todoInput.current.focus();
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      console.log(updatedTodo);
      setTodos(updatedTodo);
      setNewTodo("");
      focusInput();
    }
  };

  const toggleComplete = (id: number) => {
    // const doneTodo = todos.filter((todo) => todo.id !== id);
    // setTodos(doneTodo);
    // console.log(todos);
    const updatedTodo = todos.map((todo) =>
      id === todo.id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodo);
    console.log(todos);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };
  return (
    <>
      <h4>Todo list</h4>
      <input
        type="text"
        placeholder="todo..."
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        onKeyDown={handleKeyDown}
        ref={todoInput}
      />
      <button onClick={addTodo}>add</button>
      <button onClick={focusInput}>focus!</button>

      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} toggle={toggleComplete} />;
        })}
      </ul>

      <h4>Done list</h4>
      <ul>
        {/* todos.filter()를 이용해 donelist 태그 추가하기 */}
        {todos.map((todo) => {
          if (todo.done) return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
