import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  width: 95%;
  margin: 0 auto;
`;

export const ComponentHeadderWrapper = styled.div`
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
    width: 96%;
  }
`;
export const Headline = styled.h2`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  font-size: 1.8rem;
  background: linear-gradient(180deg, #ff8660 0%, #d5491d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subline = styled.p`
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
