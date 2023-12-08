import { Container } from "../../utils/forStyled";
import Emoji from "../../assets/emoji.png";
import { NavButton } from "../appBar";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Container>
        <WapperOfFather
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          viewport={{ once: true }}
        >
          <Wapper>
            <EmojiWpper>
              <img src={Emoji} alt="" />
            </EmojiWpper>
            <div className="headline">
              <h2>got a project? let's talk!</h2>
            </div>
            <Subline>
              <p>
                Begin a collaborative journey. Share your project concept with
                us, and let's work together to create something exceptional.
                Your ideas combined with our knowledge equals success.
              </p>
            </Subline>
            <div className="button">
              <NavButton>Let's Talk.</NavButton>
            </div>
          </Wapper>
        </WapperOfFather>
      </Container>
    </>
  );
};

export default Contact;

// ----------- styled -------------

const EmojiWpper = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 990px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const Wapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  letter-spacing: 1px;
  gap: 1.8rem;
  background: #1e1e1e;
  padding: 4rem 2rem;
  border-radius: 1rem;
  text-align: center;
  h2 {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 990px) {
    width: 95%;
    gap: 1.4rem;
    padding: 2.4rem;
    h2 {
      font-size: 1.6rem;
    }
  }
`;

const WapperOfFather = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;
const Subline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 0.7rem;
    line-height: 1.1rem;
    width: 60%;
    @media screen and (max-width: 540px) {
      width: 100%;
    }
  }
`;
