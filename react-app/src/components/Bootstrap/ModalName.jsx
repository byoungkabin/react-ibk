import styled from "styled-components";
import { useState } from "react";

const ModalName = ({ name, onClose, onSubmit }) => {
  const [text, setText] = useState(name);
  const handleSubmit = () => {
    onSubmit(text);
    onClose();
  };
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <h1>이름 바꾸기</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}> 확인 </button>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); //한 가운데로 위치
  padding: 20px;
`;
export default ModalName;
