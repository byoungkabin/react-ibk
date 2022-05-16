import styled, { css } from "styled-components";

const Item = ({ data, onDelete, onChecked }) => {
  const { id, text, isDone } = data;
  const handleClick = () => onDelete(id);
  const handleChange = () => {
    // 1.data  현재 isDone 값을 반대로
    onChecked(id);
    // 2.input의 value(check 여부)를   isDone
  };

  return (
    <Container key={id}>
      <label>
        <input type="checkbox" checked={isDone} onChange={handleChange} />
        <Content isDone={isDone}>{text}</Content>
      </label>
      <BtnDelete onClick={handleClick}>삭제</BtnDelete>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Content = styled.span`
  /* color: ${(props) => props.isDone && "#ddd"};
  text-decoration : ${({ isDone }) => isDone && "line-through"};*/
  ${({ isDone }) =>
    isDone &&
    css`
      color: #ddd;
      text-decoration: line-through;
    `}
`;

const BtnDelete = styled.button``;

export default Item;
