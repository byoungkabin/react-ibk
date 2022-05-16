import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(7);

  const handleClick = (i) => {
    setNumber(number + i);
  };
  return (
    <>
      <h1>현재 카운터 값은 {number}입니다.</h1>
      <button onClick={() => handleClick(7)}>+7</button>
      <button onClick={() => handleClick(6)}>+6</button>
      <button onClick={() => handleClick(3)}>+3</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(-1)}>-1</button>
    </>
  );
};

export default Counter2;
