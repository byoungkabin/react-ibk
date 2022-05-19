import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ link, image, title, director }) => (
        <Item key={link}>
          <a href={link} taret="_blank" rel="noreferrer">
            <Thumnail src={image} />
            {/* html의 태그를 사용하기 위해서 dangerouslySetInnerHTML-title에 b태그 있음 */}
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <p>감독 : {director} </p>
          </a>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.li``;
const Thumnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default BookList;
