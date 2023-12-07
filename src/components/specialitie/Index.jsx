import styled from "styled-components";
import { Container } from "../../utils/forStyled";
import { motion } from "framer-motion";
const Specialities = () => {
  const Specialities_box = [
    {
      name: "Logo Design",
      bg: true,
      icon: "polymer",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab ipsum eligendi. Iste, dicta nesciunt.",
    },
    {
      name: "Brand Identity",
      bg: false,
      icon: "fingerprint",
      sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab ipsum eligendi. Iste, dicta nesciunt.",
    },
    {
      name: "Illustrator Expart",
      bg: false,
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
              <Box activeBg={item.bg} key={index}>
                <Icon>
                  <span class="material-symbols-outlined">{item.icon}</span>
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
  gap: 3rem;
  padding: 2rem 0;
`;

const ComponentHeadderWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  @media screen and (max-width: 980px) {
    width: 60%;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Headline = styled.h2`
  text-transform: capitalize;
  letter-spacing: 1.5px;
  font-size: 1.8rem;
  background: linear-gradient(180deg, #ff8660 0%, #d5491d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subline = styled.p`
  text-align: center;
  letter-spacing: 1px;
  font-size: 0.9rem;
  line-height: 1.5rem;
  @media screen and (max-width: 880px) {
    letter-spacing: 1px;
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
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
    props.activeBg
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
