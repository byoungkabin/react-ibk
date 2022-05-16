import { useState } from "react";
const defaultForm = { username: "", message: "", message2: "" };
const EventPractice = () => {
  const [form, setForm] = useState(defaultForm);
  const { username, message, message2 } = form;

  const handleClick = () => {
    alert(`${username}: ${message}`);
    setForm(defaultForm);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        name="username"
        placeholder="사용자명"
        onChange={handleChange}
        value={username}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message}
        onKeyUp={handleKeyUp}
      />
      <input
        type="text"
        name="message2"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message2}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
