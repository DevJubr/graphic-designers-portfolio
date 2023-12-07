import styled from "styled-components";
import {
  Container,
  ComponentHeadderWrapper,
  Headline,
  Subline,
} from "../../utils/forStyled";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "landing pg",
      link: "#",
      poster:
        "https://cdn.dribbble.com/users/5883067/screenshots/15150235/media/a1ae1d1bdfe5c66a652abb7e3cf085eb.png",
      // alt: this.title,
    },
    {
      title: "landing pg",
      link: "#",
      poster:
        "https://cdn.dribbble.com/users/5883067/screenshots/15150235/media/a1ae1d1bdfe5c66a652abb7e3cf085eb.png",
      // alt: this.title,
    },
    {
      title: "landing pg",
      link: "#",
      poster:
        "https://cdn.dribbble.com/users/5883067/screenshots/15150235/media/a1ae1d1bdfe5c66a652abb7e3cf085eb.png",
      // alt: this.title,
    },
    {
      title: "landing pg",
      link: "#",
      poster:
        "https://cdn.dribbble.com/users/5883067/screenshots/15150235/media/a1ae1d1bdfe5c66a652abb7e3cf085eb.png",
      // alt: this.title,
    },
  ];

  return (
    <>
      <Container>
        <Wraapeer
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          viewport={{ once: true }}
        >
          <ComponentHeadderWrapper>
            <Headline>Look at my projects</Headline>
            <Subline>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              atque voluptate aperiam dicta modi sapiente, consequuntur
              repellat? Necessitatibus hic soluta, atque molestiae consequatur
              quibusdam mollitia commodi facere harum quisquam repudiandae.
            </Subline>
          </ComponentHeadderWrapper>
          <ProjectBoxWarpper>
            {projects.map((ITEM, INDEX) => (
              <Project key={INDEX}>
                <Imgrea>
                  <Img src={ITEM.poster} alt={ITEM.title} />
                </Imgrea>
                <TextArea>
                  <VisiteProject>
                    <Icon href={ITEM.link}>Click to view</Icon>
                    <BoxTitle>{ITEM.title}</BoxTitle>
                  </VisiteProject>
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </TextArea>
              </Project>
            ))}
          </ProjectBoxWarpper>
        </Wraapeer>
      </Container>
    </>
  );
};

// -------------------styled-------------
const Wraapeer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 5rem 0 1rem 0;
`;

const ProjectBoxWarpper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const Project = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #1e1e1e;
  padding-bottom: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  @media screen and (max-width: 1380px) {
    width: 300px;
  }
  @media screen and (max-width: 580px) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: cover;
`;

const Imgrea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 1.5rem 1rem 0.5rem 1rem;
  gap: 0.4rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  @media screen and (max-width: 1380px) {
    padding: 1.2rem 0.8rem 0.5rem 0.8rem;
  }
`;

const VisiteProject = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.4rem;
  span {
    font-size: 1.1rem;
  }
`;

const Icon = styled.a`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 0.6rem;
`;

const BoxTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
`;

export default Projects;
