import React from "react";
import { useSelector } from "react-redux";

const DoneList = () => {
  const allList = useSelector((state) => state.todo.list);
  const doneList = allList.filter((item) => item.done === true);

  return (
    <section>
      <h2>DONE</h2>
      <ul>
        {doneList.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </section>
  );
};

export default DoneList;
