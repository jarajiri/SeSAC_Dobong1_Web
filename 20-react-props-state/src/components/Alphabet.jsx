import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alphabet: "a" },
    { id: 2, alphabet: "b" },
    { id: 3, alphabet: "c" },
    { id: 4, alphabet: "d" },
    { id: 5, alphabet: "e" },
  ]);
  const [input, setInput] = useState("");

  const addAlpha = () => {
    if (input.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alphabet: input,
    });
    setList(newAlpha);
    setInput("");
  };

  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") addAlpha();
  };

  const deleteAlpha = (id) => {
    console.log(id);
    //id와 filter 이용해서 삭제구현
    const newAlpha = list.filter((alphabet) => alphabet.id !== id); //
    setList(newAlpha);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        onKeyDown={(e) => {
          activeEnter(e);
        }}
      />
      <button onClick={addAlpha}>add alphabet</button>
      <ol>
        {list.map((al) => (
          <li
            key={al.id}
            onDoubleClick={() => {
              deleteAlpha(al.id);
            }}>
            {al.alphabet}
          </li>
        ))}
      </ol>
    </div>
  );
}
