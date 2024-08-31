import React from "react";
import { Container } from "../../utils/forStyled";
import styled from "styled-components";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Abtme from "../../assets/abtme.jpg";
import Hero from "../../assets/Hero.jpg";
import { motion } from "framer-motion";
const HeroSection = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section>
      <Container>
        <Wrapper>
          <ForImg>
            <Img
              as={motion.img}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              initial={{ opacity: 0 }}
              src={Hero}
              alt="Zayedur rahman Sabbir"
            />
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
                Designing Tomorrow's World, Today!
              </ColorfulText>
            </Headline>
            <Subline>
              <motion.p
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                initial={{ opacity: 0 }}
              >
                Embark on a visual journey with Jayed, experiencing the fusion
                of creativity and functionality in logos, brand identities,
                stationery, and illustrations. Discover four years of Jayed's
                design innovation.
              </motion.p>
            </Subline>

            <ForButton>
              <ButtonS
                href="https://www.upwork.com/freelancers/gfxjayed"
                target="_blank"
              >
                hire me.
              </ButtonS>

              {/* 
            
            
            */}

              <Modal
                style={{ background: "#1e1e1e !important" }}
                opened={opened}
                onClose={close}
                title="About Me"
                centered
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={Abtme}
                  alt="About jayed"
                />
              </Modal>

              <WithborderButton onClick={open}>about me.</WithborderButton>
            </ForButton>
          </ForText>
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
  width: 500px;
  height: 500px;
  object-fit: cover;
  // border-radius: 50%;
  /* border-image: linear-gradient(138deg, #7aff60 9.86%, #ea00ff 104.95%) 1;
  border-style: solid;
  border-width: 4px; */

  @media screen and (max-width: 710px) {
    width: 300px;
    height: 300px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: -3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 4rem 0;
  position: relative;
  gap: 3rem;
  @media screen and (max-width: 710px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2.5rem;
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
  position: absolute;
  bottom: -240px;
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
      line-height: 2.6rem;
    }
  }
`;

const ColorfulText = styled(motion.h1)`
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
    font-size: 0.8rem;
    line-height: 1.48rem;
    font-weight: 100;
  }
  @media screen and (max-width: 710px) {
    p {
      text-align: center;
      width: 100%;
      font-size: 0.666rem;
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
  margin-top: 1rem;
  @media screen and (max-width: 710px) {
  }
`;

const ButtonS = styled.a`
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

const WithborderButton = styled(ButtonS)`
  background: transparent;
  color: aliceblue;
  border: 2px solid aliceblue;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: aliceblue;
    clip-path: circle(0% at 50% 100%);
    transition: clip-path 0.4s ease-in-out;
    z-index: -1 !important;
  }
  &:hover {
    color: black;
  }
  &:hover:before {
    transition: all 0.4s ease-in-out;
    background: aliceblue;
    z-index: -1 !important;
    color: black !important;
    clip-path: circle(100% at 53% 85%);
  }

  @media screen and (max-width: 710px) {
  }
`;
