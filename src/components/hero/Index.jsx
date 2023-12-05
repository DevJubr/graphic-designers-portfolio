import React from "react";
import { Container } from "../../utils/forStyled";
const HeroSection = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <ContentSide>
            <HeaderText>
              <Heading>
                Get Your
                <br />
                Product Identity from Me.
              </Heading>
            </HeaderText>

            <HeroButton>
              Download CV
              <span
                style={{
                  // width: "10px",
                  // height: "10px",
                  fontSize: "1.5rem",
                }}
                className="material-symbols-outlined"
              >
                cloud_download
              </span>
            </HeroButton>
          </ContentSide>
          <ImgSide>
            <ImageBorder />
            <Image
              src="https://unsplash.com/photos/WMD64tMfc4k/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bW9kZWwlMjBtYW4lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTcwMTc1MzE1NXww&force=true&w=640"
              alt=""
            />
          </ImgSide>
        </Wrapper>
      </Container>
    </section>
  );
};

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 3rem;
  @media screen and (min-width: 710px) {
    flex-direction: row;
    align-items: center;
    /* max-height: calc(100vh - 80px); */
    justify-content: space-between;
    /* border: 1px solid red; */
    margin-top: 5rem;
  }
`;

const ContentSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.5rem;
  @media screen and (min-width: 710px) {
    width: calc(100% / 2);
  }
`;

const ImgSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 910px) {
    width: calc(100% / 2);
    ::before {
      content: "Graphic designer";
      position: absolute;
      font-size: 9rem;
      right: -1%;
      width: 65px;
      top: 22%;
      color: white;
      font-weight: 600;
      line-height: 1;
      text-transform: capitalize;
    }
  }

  @media screen and (min-width: 1440px) {
    width: calc(100% / 3);
    ::before {
      content: "Graphic designer";
      position: absolute;
      font-size: 9rem;
      right: -1%;
      width: 65px;
      top: 22%;
      color: white;
      font-weight: 600;
      line-height: 1;
      text-transform: capitalize;
    }
  }
`;

const Image = styled.img`
  width: 85%;
  object-fit: cover;
  border-radius: 155px;
  position: relative;
`;

const ImageBorder = styled.div`
  content: "";
  width: 88%;
  height: 100%;
  position: absolute;
  top: 3%;
  left: 3%;
  border: 1px solid #b24a4a;
  border-radius: 150px;
`;

const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 4rem;
  font-weight: 300;
  @media screen and (min-width: 910px) {
    font-size: 5rem;
  }
`;

const HeroButton = styled.button`
  border: none;
  outline: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  background: black;
  color: white;
  cursor: pointer;
  padding: 1rem 1.4rem;

  @media screen and (min-width: 710px) {
    gap: 0.8rem;
    font-size: 1rem;
    padding: 1.2rem 1.8rem;
  }
`;

export default HeroSection;
