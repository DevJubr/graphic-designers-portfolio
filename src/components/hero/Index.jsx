import React from "react";
import { Container } from "../../utils/forStyled";
import styled from "styled-components";
const HeroSection = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <ForImg>
            <Img
              src="https://chotourl.vercel.app/rNyZd8H_f"
              alt="Zayedur rahman Sabbir"
            />
          </ForImg>
          <ForText>
            <Headline>
              <ColorfulText>hello! I am Zayexd,</ColorfulText>
              <h1>ceative graphic designer based in vangladesh.</h1>
            </Headline>
            <Subline>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit corporis similique quam quasi, veniam aspernatur
                optio. Corrupti accusamus tempore quo.
              </p>
            </Subline>
          </ForText>
          <ForButton>
            <Button>get it touch.</Button>
            <WithborderButton>view al works.</WithborderButton>
          </ForButton>
        </Wrapper>
      </Container>
    </section>
  );
};

export default HeroSection;

// ---------------- styled ------------------------

const ForImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 0;
  gap: 3rem;
`;

const ForText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Headline = styled.div`
  h1 {
    font-size: 2rem !important;
    text-align: center;
  }
`;

const ColorfulText = styled.h1`
  background-image: linear-gradient(138deg, #ff8660 9.86%, #8000ff 104.95%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  color: transparent;
`;

const Subline = styled.div`
  p {
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: center;
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.22rem;
  }
`;

const ForButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;

const Button = styled.button`
  text-transform: uppercase;
  letter-spacing: 1px;
  background: aliceblue;
  font-size: 0.8rem;
  color: black;
  padding: 0.8rem 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
`;

const WithborderButton = styled(Button)`
  background: none;
  color: aliceblue;
  border: 2px solid aliceblue;
`;
