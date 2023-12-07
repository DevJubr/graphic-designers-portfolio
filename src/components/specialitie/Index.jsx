import styled from "styled-components";
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
      name: "Logo Design",
      bg: "true",
      icon: "polymer",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab ipsum eligendi. Iste, dicta nesciunt.",
    },
    {
      name: "Brand Identity",
      bg: "false",
      icon: "fingerprint",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab ipsum eligendi. Iste, dicta nesciunt.",
    },
    {
      name: "Illustrator Expart",
      bg: "false",
      icon: "landscape",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab ipsum eligendi. Iste, dicta nesciunt.",
    },
  ];

  return (
    <>
      <Container>
        <Wrapper
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          viewport={{ once: true }}
        >
          <ComponentHeadderWrapper>
            <Headline>Specialities</Headline>
            <Subline>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              repellendus possimus sed tempora porro nisi illum, officia
              perspiciatis officiis illo ipsam quis dolorum deserunt. Officiis
              expedita magni nisi quia laborum.
            </Subline>
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
    </>
  );
};

export default Specialities;

// -----------------styled-----------------------
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3.8rem;
  padding: 2rem 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
