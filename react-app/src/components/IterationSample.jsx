import { useState, useRef } from "react";
const defaultNames = [
  {
    id: 1,
    text: "눈사람",
  },
  {
    id: 2,
    text: "얼음",
  },
  {
    id: 3,
    text: "눈",
  },
  {
    id: 4,
    text: "바람",
  },
];
const IterationSample = () => {
  const [text, setText] = useState("");
  const [names, setNames] = useState(defaultNames);
  const nextId = useRef(defaultNames.length + 1);

  const handleClick = () => {
    if (!text) return;
    const newNames = [...names, { id: nextId.current, text }];
    setNames(newNames);
    setText("");
    nextId.current = nextId.current + 1;
  };
  const handleDelete = (deleteId) => {
    // names중에서 id가 deleteId와 다른 item만 뽑아서 newNames만들기
    const newNames = names.filter((name) => name.id !== deleteId);
    setNames(newNames);
  };
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
