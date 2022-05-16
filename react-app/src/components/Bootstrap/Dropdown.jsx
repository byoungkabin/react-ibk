import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const buttonEl = useRef(null);

  //   const handleClick = () => {
  //     setIsShow(!isShow);
  //   };
  useEffect(() => {
    const onClick = (e) => {
      //클릭한게 버튼이 아닐때만 false
      console.log("target", e.target);
      if (e.target !== buttonEl.current) {
        setIsShow(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Container>
      <Button ref={buttonEl} onClick={() => setIsShow(!isShow)}>
        Dropdown
      </Button>
      {isShow && (
        <Menu isActive={isShow}>
          <Item> item #1 </Item>
          <Item> item #2 </Item>
          <Item> item #3 </Item>
          <Item> item #4 </Item>
        </Menu>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: ${({ isActive }) => !isActive && "none"};
  position: absolute;
  top: 45px;
  background: #fff;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 120px;
`;

const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background-color: #efefef;
  }
`;
export default Dropdown;
