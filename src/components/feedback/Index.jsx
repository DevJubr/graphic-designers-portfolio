import styled from "styled-components";
import Jakbed from "../../assets/client/jakbed.jpeg";
import Client0 from "../../assets/client/client0.jpg";
import Client1 from "../../assets/client/client1.jpg";
import Client2 from "../../assets/client/client2.jpg";
import Client3 from "../../assets/client/client3.jpg";

import {
  Container,
  ComponentHeadderWrapper,
  Headline,
} from "../../utils/forStyled";
import { useState } from "react";
import { motion } from "framer-motion";

const FeedBacks = () => {
  const [show, setshow] = useState(false);
  const feedBacks = [
    {
      clint: "Andreea Cotuna",
      pic: Client0,
      massage:
        "It's been a wonderful experience working with Jayedur. His communication is great, he is very prompt and always on top of things. I would highly recommend his services and quality work.",
    },
    {
      clint: "Jack Bade",
      pic: Jakbed,
      massage:
        "Jayed was incredible to work with, he is responsive with a great attention to detail. He was patient and understanding with alterations that were needing for different samples. We will definately use Jayed again.",
    },
    {
      clint: "Rodas Mekonnen",
      pic: Client1,
      massage:
        "Jayed has yet again excelled! We decided to get some designs for work cars and also for bumper stickers as advertising and we are so happy. We will continue to work with Jayed in the future! Thanks",
    },
    {
      clint: "Iris Cas",
      pic: Client2,
      massage:
        "Absolutely thrilled with Jayedur's outstanding work! We sought designs for our company's Branding fleet Logo for promotional purpose and count us in as long-term partners with Jayedur. Thank you!",
    },

    {
      clint: "Bade PN ",
      pic: Client3,
      massage:
        "Jayedur was extremely easy to work with, We will definitely be using his services again in the future. I would highly highly recommend working together!! He completely understood what we were after and his designs were great. He clearly communicated his timeline for completion of each step and turned around the work very quickly. Having clear communication meant it was very easy to make changes and he quickly revised the designs.",
    },
  ];

  return (
    <>
      <Container>
        <Warpper
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          viewport={{ once: true }}
        >
          <ComponentHeadderWrapper>
            <Headline>What people say about me.</Headline>
          </ComponentHeadderWrapper>
          <Feedbacks seeall={show}>
            {feedBacks.map((item, index) => (
              <Fidback key={index}>
                <InfoPart>
                  <ImgPrt>
                    <Img src={item.pic} alt={item.clint} />
                  </ImgPrt>
                  <NmasPart>
                    <h5 className="name">{item.clint}</h5>
                    <RatesPrt>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        fill="orange"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        fill="orange"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        fill="orange"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        fill="orange"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="18"
                        fill="orange"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </RatesPrt>
                  </NmasPart>
                </InfoPart>
                <TextPart>
                  <p>{item.massage}</p>
                </TextPart>
              </Fidback>
            ))}

            <BtnWapper seeall={show}>
              <Button onClick={() => setshow((prev) => !prev)}>
                show more
              </Button>
            </BtnWapper>
          </Feedbacks>
        </Warpper>
      </Container>
    </>
  );
};

// ------------------ styled ---------
const ImgPrt = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Warpper = styled.div`
  /* padding: 6.3rem 0; */
  /* padding-bottom: 3rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Feedbacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  width: 100%;
  justify-content: center;
  height: ${(props) => (props.seeall === true ? "auto" : "600px")};
  overflow-y: hidden;
  position: relative;
`;

const Fidback = styled.div`
  width: calc(100% / 4);
  background: #1e1e1e;
  padding: 1.4rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  @media screen and (max-width: 990px) {
    width: 95%;
  }
`;

const TextPart = styled.div`
  p {
    font-size: 0.8rem;
    letter-spacing: 1px;
    line-height: 1.2rem;
    color: #d0e9ff;
  }
`;

const InfoPart = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

const NmasPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const RatesPrt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  svg {
    height: 10px;
    width: 12px;
  }
`;

const BtnWapper = styled.div`
  position: absolute;
  bottom: -3%;
  width: 100%;
  padding: 2rem 0;
  background: linear-gradient(180deg, #1e1e1e3d 0%, #161513 100%);
  z-index: 9999;
  display: ${(props) => (props.seeall === true ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  /* background: linear-gradient(180deg, #5badff 0%, #1373d1 100%); */
  background: linear-gradient(180deg, #ff8660 0%, #d5491d 100%);

  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  border-radius: 2rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  @media screen and (max-width: 990px) {
    font-size: 0.76rem;
  }
`;

export default FeedBacks;
