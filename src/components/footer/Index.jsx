import { Container } from "../../utils/forStyled";
import Logo from "../../assets/logo.png";
import styled from "styled-components";

const FooterComponent = () => {
  return (
    <Container>
      <Footer>
        <Wrapper>
          <FooterLeft>
            <LogoS>
              <img src={Logo} alt="logo" />
            </LogoS>
            <span className="footer__text">&copy; All rights reserved.</span>
          </FooterLeft>
          <FooterRight>
            <FooterMenu>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact</li>
            </FooterMenu>
            <FooterSocial>
              <li>
                <SvgWrapper
                  href="https://www.behance.net/d-zayed"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4c0-19.7-11.7-27.4-30.3-27.5h-46v52.9h45.1zm-5.4-129.6H110.3v44.8H153c15.1 0 25.8-6.6 25.8-22.9c0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8h62.2c-1.7-18.5-11.3-29.7-30.5-29.7c-18.3 0-30.5 11.4-31.7 29.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM349.5 185H271.7V166.1h77.8V185zM193.7 243.7c23.6 6.7 35 27.5 35 51.6c0 39-32.7 55.7-67.6 55.9H68v-192h90.5c32.9 0 61.4 9.3 61.4 47.5c0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4c0 1.6-.1 3.3-.2 5c0 .8-.1 1.5-.1 2.2H279.5c0 22.2 11.7 35.3 34.1 35.3c11.6 0 26.5-6.2 30.2-18.1h33.7c-10.4 31.9-31.9 46.8-65.1 46.8c-43.8 0-71.1-29.7-71.1-73c0-41.8 28.7-73.6 71.1-73.6z" />
                  </svg>
                </SvgWrapper>
              </li>
              <li>
                <SvgWrapper
                  href="https://www.linkedin.com/in/gfxjayed/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </SvgWrapper>
              </li>

              <li>
                <SvgWrapper
                  href="http://www.facebook.com/zayed662"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </SvgWrapper>
              </li>
              <li>
                <SvgWrapper
                  href="https://www.upwork.com/freelancers/gfxjayed"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM270.8 274.3c5.2 8.4 23.6 29.9 51.5 29.9v0c25.2 0 44.9-20.2 44.9-49.7s-19.4-49.7-44.9-49.7s-44.9 16.7-51.5 69.5zm-26.7-41.8c7.3-30.5 32.7-60.1 78.2-60.1l0 0c45.1 0 80.9 35.2 80.9 82.2s-35.9 81.9-80.9 81.9c-.6 0-1.1 0-1.7 0c-.5 0-1.1 0-1.6 0h-.1c-14.5-.5-28.7-4.8-40.9-12.6c-4.7-2.8-9.1-6-13.4-9.5l-12.8 78.4H214.9l19.4-110.6c-20.8-29.1-31.6-62.4-36.2-79.7V255c0 48-30.5 81.5-74.2 81.5c-22 0-41-8-54.8-23.3c-13.4-14.8-20.8-35.5-20.8-58.3V176.8H84.5l-.3 78.2c0 28.4 14.5 49.3 39.8 49.3s38.2-20.9 38.2-49.3V176.8h62.8c4.8 19.3 10.9 40.1 19.2 55.6z" />
                  </svg>
                </SvgWrapper>
              </li>
            </FooterSocial>
          </FooterRight>
        </Wrapper>
      </Footer>
    </Container>
  );
};

export default FooterComponent;

// --------------------styled ---------------

const LogoS = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

const Footer = styled.footer`
  text-transform: capitalize;
  letter-spacing: 1px;
  border-top: 0.5px solid #454545dd;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2rem;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 0.5rem;

  span {
    font-size: 0.8rem;
  }
`;

const FooterRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  li {
    font-size: 0.9rem;
  }
`;

const FooterSocial = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  li {
    width: 34px;
    height: 34px;
    background-image: linear-gradient(138deg, #ff8660 9.86%, #8000ff 104.95%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SvgWrapper = styled.a`
  border-radius: 50%;
  width: 94%;
  height: 94%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #161513;

  svg {
    fill: aliceblue;
  }
`;
