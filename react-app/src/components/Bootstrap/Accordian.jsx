import styled from "styled-components";
import { useState } from "react";

const Accordian = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    // if (index === activeIndex) {
    //   setActiveIndex(-1);
    // } else {
    //   setActiveIndex(index);
    // }
    const nextIndex = index === activeIndex ? -1 : index;
    setActiveIndex(nextIndex);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id}>
          <Header onClick={() => handleClick(index)}>{title}</Header>
          <Body isActive={index === activeIndex}>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  border: 1px solid #0c0c0c;
  margin: 100px;
  border-radius: 4px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #fdfbfb;
  }
`;
const Header = styled.div`
  padding: 10px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  display: ${({ isActive }) => !isActive && "none"};
`;

export default Accordian;
