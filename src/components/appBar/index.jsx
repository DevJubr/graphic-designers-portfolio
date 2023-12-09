import styled from "styled-components";
import { Container } from "../../utils/forStyled";
import Logo from "../../assets/logo.png";
const AppBar = () => {
  const nav_items = [
    {
      item: "home",
      path: "/",
    },
    {
      item: "service",
      path: "#service",
    },
    {
      item: "project",
      path: "#project",
    },
    {
      item: "contact",
      path: "#contact",
    },
  ];
  return (
    <Container>
      <Nav>
        <Wrapper>
          <NavLeft>
            <NavLogo>
              <img src={Logo} alt="logo" />
            </NavLogo>
            <NavMenuWrapper>
              <NavMenu>
                {nav_items.map((item, index) => (
                  <NavItem key={index}>
                    <a href={item.path}>{item.item}</a>
                  </NavItem>
                ))}
              </NavMenu>
            </NavMenuWrapper>
          </NavLeft>
          <div className="navRight">
            <NavButton href="https://wa.link/nsyarc" target="_blank">
              Let's Talk.
            </NavButton>
          </div>
        </Wrapper>
      </Nav>
    </Container>
  );
};

export default AppBar;

// ---------------styled-components--------------
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  @media screen and (max-width: 710px) {
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  @media screen and (max-width: 710px) {
    display: flex;
    align-items: center;
  }
`;

const NavLogo = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 2.5rem;
  img {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 710px) {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 1.77rem;
  }
`;

const NavMenuWrapper = styled.div`
  @media screen and (max-width: 710px) {
    position: fixed;
    bottom: 2%;
    max-width: 1400px;
    width: 90%;
    display: none;
  }
`;

const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media screen and (max-width: 710px) {
    padding: 1rem;
    text-transform: uppercase;
    background: #dae5ff;
    border-radius: 2rem;
    gap: 0rem;
  }
`;

export const NavButton = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;
  background: aliceblue;
  color: black;
  padding: 0.8rem 1.2rem;
  border-radius: 4rem;
  @media screen and (max-width: 710px) {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.65rem;
    background: aliceblue;
    color: black;
    padding: 0.6rem 1rem;
    border-radius: 4rem;
  }
`;

const NavItem = styled.li`
  font-size: 1.2rem;
  text-transform: capitalize;
  @media screen and (max-width: 710px) {
    background: none;
    color: black;
    font-size: 0.6rem;
  }
`;
const Nav = styled.nav`
  width: unset;
  display: unset;
  @media screen and (max-width: 710px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
