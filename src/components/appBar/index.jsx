import styled from "styled-components";
import { Container } from "../../utils/forStyled";
import { useState } from "react";
const AppBar = () => {
  const [active, setactive] = useState(false);
  return (
    <nav>
      <Container>
        <Wrapper>
          <div className="for__logo">
            <H2>Zayex</H2>
          </div>
          <ForMenu vblty={active}>
            <UnorderedList>
              <ListItem>Home</ListItem>
              <ListItem>Service</ListItem>
              <ListItem>Portfolio</ListItem>
              <ListItem>Contact</ListItem>
            </UnorderedList>
          </ForMenu>
          <ForNavButtons>
            <Button0>Get in Touch</Button0>
            {/* <span class="material-symbols-outlined">close</span> */}
            <span
              class="material-symbols-outlined"
              id="ham"
              onClick={() => setactive((prev) => !prev)}
            >
              menu
            </span>
          </ForNavButtons>
        </Wrapper>
      </Container>
    </nav>
  );
};

export default AppBar;

// ---------------styled-components--------------

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  position: relative;
  justify-content: space-between;
  @media screen and (min-width: 710px) {
    position: unset;
  }

  @media screen and (min-width: 980px) {
    position: unset;
  }
`;

const ForMenu = styled.div`
  position: absolute;
  top: 100%;
  transform: ${(props) =>
    props.vblty === true ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform ease 0.4s;
  width: 100%;
  height: 100vh;
  padding: 2rem 0;
  @media screen and (min-width: 710px) {
    position: unset;
    width: unset;
    height: unset;
    transform: unset;
  }

  @media screen and (min-width: 980px) {
    position: unset;
    width: unset;
    height: unset;
    transform: unset;
  }
`;

const ListItem = styled.li`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 300;
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media screen and (min-width: 710px) {
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
  }
  @media screen and (min-width: 980px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;
const Button0 = styled.button`
  font-size: 1.2rem;
  padding: 0.8rem 1.8rem;
  background-color: black;
  display: none;
  color: white;

  @media screen and (min-width: 710px) {
    font-size: 0.8rem;
    display: block;
    padding: 0.8rem 1rem;
  }

  @media screen and (min-width: 980px) {
    display: block;
    font-size: 1.2rem;
    padding: 0.8rem 1.8rem;
  }
`;
const ForNavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 980px) {
  }
`;
const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 200;

  @media screen and (min-width: 980px) {
    font-size: 3rem;
  }
`;
