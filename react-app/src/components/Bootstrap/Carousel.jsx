import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    let nextIndex = activeIndex + i;
    const lastIndex = data.length - 1;

    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <Container>
      <List>
        {data.map(({ id, image }, index) => (
          <Image key={id} src={image} isActive={index === activeIndex} />
        ))}
      </List>
      <BtnPrev onClick={() => handleClick(-1)}> 이전</BtnPrev>
      <BtnNext onClick={() => handleClick(1)}> 다음 </BtnNext>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;
const List = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 800px;
  height: 600px;
  opacity: ${({ isActive }) => !isActive && "0"};
  transition: :opacity 1s;
`;
const BtnPrev = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
const BtnNext = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export default Carousel;
