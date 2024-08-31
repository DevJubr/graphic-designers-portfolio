import styled from "styled-components";
import ArrowIms from "../../assets/Arrow.svg";
import {
  Container,
  ComponentHeadderWrapper,
  Headline,
  Subline,
} from "../../utils/forStyled";
import { motion } from "framer-motion";
const Specialities = () => {
  const Specialities_box = [
    {
      name: " Logo & brand identity Design",
      bg: "true",
      icon: "polymer",
      sub: "In logo design, I create impactful brand identities, merging creativity with strategy to craft memorable and versatile logos for diverse clients.",
    },
    {
      name: " Social Media Design",
      bg: "false",
      icon: "fingerprint",
      sub: "Crafting impactful brand identities, I merge creativity and strategy to create memorable visual representations for brands.",
    },
    {
      name: "Ai & PS Expart",
      bg: "false",
      icon: "landscape",
      sub: "Mastering Illustrator, I create intricate and stunning designs, leveraging its tools to produce visually captivating artwork",
    },
    {
      name: "Graphic Design",
      bg: "false",
      icon: "draw",
      sub: "From pixel to perfection, our design wizards will turn your ideas into visual wonders. Get ready to wow the world with eye-catching graphics that steal the spotlight!",
    },
  ];

  return (
    <section id="service">
      <Container>
        <Wrapper
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          viewport={{ once: true }}
        >
          <ComponentHeadderWrapper state={"row"}>
            <Headline>Our Services</Headline>
            {/* <Subline>
              I begin by deeply understanding brand values, translating them
              into impactful visuals, ensuring consistency and resonance across
              brand identity, logo, and stationery or product design.
            </Subline> */}
            <motion.img
              src={ArrowIms}
              alt="seehere"
              animate={{
                rotate: [0, 0, -90, -90, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </ComponentHeadderWrapper>
          <BoxWrapper>
            {Specialities_box.map((item, index) => (
              <Box activebg={item.bg} key={index}>
                <Icon>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </Icon>
                <Title>{item.name}</Title>
                <Sub>{item.sub}</Sub>
              </Box>
            ))}
          </BoxWrapper>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Specialities;

// -----------------styled-----------------------
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 3.8rem;
  padding-top: 2.5rem;
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: start;
  gap: 4.5rem;
  @media screen and (max-width: 680px) {
    gap: 2.5rem;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 280px;
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3rem;
  background: ${(props) =>
    props.activebg === "true"
      ? "linear-gradient(180deg, #ff8660 0%, #d5491d 100%)"
      : "#1e1e1e"};
  border-radius: 0.5rem;
  justify-content: space-evenly;

  @media screen and (max-width: 480px) {
    width: 98%;
    padding: 1.2rem 1rem;
    gap: 1.3rem;
    border-radius: 0.5rem;
    height: 240px;
    justify-content: unset;
  }
`;

const Icon = styled.div`
  span {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 480px) {
    span {
      font-size: 2.5rem;
    }
  }
`;

const Title = styled.h4`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.6rem;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Sub = styled.p`
  font-size: 0.77rem;
  letter-spacing: 1px;
  line-height: 1.3rem;
`;
