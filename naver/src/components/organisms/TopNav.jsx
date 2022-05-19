import styled from "styled-components";
import { NavLink, useLocation, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";

const linkList = [
  { link: "/", name: "메인" },
  { link: "/movie", name: "영화" },
  { link: "/book", name: "책" },
];

const TopNav = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     const isMain = pathname === "/";
  //     setIsShow(!isMain);
  //   }, [pathname]);

  //   const [isShow, setIsShow] = useState(true);

  //   if (!isShow) return <></>;

  return (
    <>
      <Container>
        <Nav>
          {linkList.map(({ link, name }) => (
            <Link to={link} key={link}>
              <BtnLink> {name}</BtnLink>
            </Link>
          ))}
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;
const BtnLink = styled.button`
  background: #fff;
  border: 1px;
`;

const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      background: #000;
      color: #fff;
    }
  }
`;

export default TopNav;
