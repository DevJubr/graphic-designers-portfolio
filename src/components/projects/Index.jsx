import styled from "styled-components";
import Project0 from "../../assets/projects/project0.png";
import Project1 from "../../assets/projects/project1.png";
import Project2 from "../../assets/projects/project2.png";
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
      title: "restaurent logo.",
      link: "https://www.behance.net/gallery/186157913/Restaurant-Logo",
      poster: Project0,
    },
    {
      title: "branding.",
      link: "https://www.behance.net/gallery/183205043/CRM-tools",
      poster: Project1,
    },
    {
      title: "stationery products.",
      link: "https://www.behance.net/gallery/184819099/Stationery",
      poster: Project2,
    },
  ];

  return (
    <section id="projects">
      <Container>
        <Wraapeer
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          viewport={{ once: true }}
        >
          <ComponentHeadderWrapper>
            <Headline>Look at my projects</Headline>
            <Subline>
              Exploring my diverse portfolio – a showcase of passion,
              creativity, and skills. Dive into my projects and witness the
              fusion of innovation and dedication in action.
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
                    <BoxTitle href={ITEM.link}>{ITEM.title}</BoxTitle>
                  </VisiteProject>
                  <a href={ITEM.link}>
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </TextArea>
              </Project>
            ))}
          </ProjectBoxWarpper>
        </Wraapeer>
      </Container>
    </section>
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
  padding: 6.3rem 0;
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
  height: 100%;
`;

const Imgrea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 225.3px;
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

const BoxTitle = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
`;

export default Projects;
