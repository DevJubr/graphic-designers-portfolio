import { Container } from "../../utils/forStyled";
import Emoji from "../../assets/emoji.png";
// import { NavButton } from "../appBar";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
  const submitHendel = () => {
    const mailToLink = `mailto:gfxjayed@gmail.com?subject=Enter Your Subject&body=Enter Your Message`;
    window.location.href = mailToLink;
  };

  return (
    <section id="contact">
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
            <div
              className="button"
              style={{ cursor: "pointer", zIndex: "999" }}
              onClick={() => submitHendel()}
            >
              <NavButton>Let's Talk.</NavButton>
            </div>
          </Wapper>
        </WapperOfFather>
      </Container>
    </section>
  );
};

export default Contact;

// ----------- styled -------------
//

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

const NavButton = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  background: transparent;
  color: aliceblue;
  border: none;
  padding: 15px 30px;
  border-radius: 1.5rem;
  border: 2px solid #ddd;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.4s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1.5rem;
    border: 2px solid orange;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #ff8660 0%, #d5491d 100%);
    clip-path: circle(0% at 0 100%);
    transition: clip-path 0.4s;
    z-index: -1;
  }

  &:hover:before {
    border: 2px solid orange;
    border-radius: 1.5rem;
    clip-path: circle(102.1% at 25% 70%);
  }

  @media screen and (max-width: 710px) {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.65rem;
    background: aliceblue;
    color: black;
    padding: 0.6rem 1rem;
    // border-radius: 4rem;
  }
`;
