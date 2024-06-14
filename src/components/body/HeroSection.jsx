import React from "react";
import styled from "styled-components";
import heroImage from "../../assets/images/hero.jfif";
import appStore from "../../assets/images/app-store.png";
import googlePlay from "../../assets/images/google-play.png";
import {
  Content,
  TitleContainer,
  Title,
  TextDec,
  SubText,
  Download,
  Image,
  Container,
} from "./styleHero";
import RotateSection from "./RotateSection";
import phone from "../../assets/images/phone.png"

const Outer = styled.div`
  width: 100%;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  height: 789px;

  @media (max-width: 360px) {
    height: 264px;

    &::before {
      height: 264px;
    }
  }
`

const Wrapper = styled.div`
  
  position: relative;
  width: 100%;
  height: 789px;
  overflow: hidden;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 789px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 360px) {
    height: 264px;

    &::before {
      height: 264px;
    }
  }
`;

const HeroSection = () => {
  return (
    <Outer>
      <Wrapper id="home">
        <Container>
          <Content>
            <TitleContainer>
              <Title>
                <TextDec>Experience</TextDec> the Future of Female Commerce{" "}
                <br></br> with <TextDec>Cnex</TextDec>
              </Title>
            </TitleContainer>
            <SubText>
              Order, Preorder, and Book - Your Ultimate Destination for Female
              Products and Services
            </SubText>
            <Download>
              <Image src={appStore} alt="app-store" />
              <Image src={googlePlay} alt="google-play" />
            </Download>
          </Content>
        </Container>
      </Wrapper>
      <RotateSection />
    </Outer>
  );
};

export default HeroSection;
