import React from "react";
import { Container } from "../../utils/forStyled";
import styled from "styled-components";
import Model from "../../assets/model.jpeg";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <ForImg>
            <Img src={Model} alt="Zayedur rahman Sabbir" />
          </ForImg>
          <ForText>
            <Headline>
              <ColorfulText
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                initial={{ opacity: 0 }}
              >
                hello! I am Zayexd,
              </ColorfulText>
              <motion.h1
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                initial={{ opacity: 0 }}
              >
                ceative graphic designer based in vangladesh.
              </motion.h1>
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
  @media screen and (max-width: 710px) {
  }
`;

const Img = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  border-image: linear-gradient(138deg, #7aff60 9.86%, #ea00ff 104.95%) 1;
  border-style: solid;
  border-width: 4px;
  @media screen and (max-width: 710px) {
    width: 200px;
    height: 200px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  gap: 3rem;
  @media screen and (max-width: 710px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    gap: 3rem;
  }
`;

const ForText = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media screen and (max-width: 710px) {
  }
`;

const Headline = styled.div`
  h1 {
    text-transform: capitalize;
    font-size: 3.8rem !important;
    text-align: center;
    line-height: 4.8rem;
  }
  @media screen and (max-width: 710px) {
    h1 {
      font-size: 2rem !important;
      text-align: center;
    }
  }
`;

const ColorfulText = styled.h1`
  background-image: linear-gradient(138deg, #ff8660 9.86%, #8000ff 104.95%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  color: transparent;
  @media screen and (max-width: 710px) {
  }
`;

const Subline = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: center;
    width: 50%;
    font-size: 1rem;
    line-height: 1.22rem;
  }
  @media screen and (max-width: 710px) {
    p {
      text-align: center;
      width: 100%;
      font-size: 0.8rem;
      line-height: 1.22rem;
    }
  }
`;

const ForButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: 710px) {
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  letter-spacing: 1px;
  background: aliceblue;
  font-size: 1rem;
  color: black;
  padding: 1rem 1.4rem;
  border-radius: 2rem;
  cursor: pointer;
  @media screen and (max-width: 710px) {
    text-transform: uppercase;
    letter-spacing: 1px;
    background: aliceblue;
    font-size: 0.8rem;
    color: black;
    padding: 0.8rem 1.2rem;
    border-radius: 2rem;
    cursor: pointer;
  }
`;

const WithborderButton = styled(Button)`
  background: none;
  color: aliceblue;
  border: 2px solid aliceblue;
  @media screen and (max-width: 710px) {
  }
`;