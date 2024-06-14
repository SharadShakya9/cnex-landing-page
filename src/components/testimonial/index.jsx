import React, { useState } from "react";
import {
  ButtonContainer,
  Container,
  Content,
  HeaderContainer,
  TextDec,
  Title,
  TitleContainer,
  TopContent,
  View,
  Wrapper,
} from "./styleTestimonial";
import Header from "../feature/Header";
import IconButtons from "../buttons/IconButtons";
import useWindowWidth from "../useWindowWidth/useWindowWidth";
import TestimonialFactory from "./TestimonialFactory";

function Testimonial() {
  const width = useWindowWidth()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    <TestimonialFactory type="1" key="1" />,
    <TestimonialFactory type="2" key="2" />,
    <TestimonialFactory type="1" key="3" />,
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Wrapper>
      <Container>
        <TopContent>
          <HeaderContainer>
            <TitleContainer>
              <Header />
              <Title>
                What our <TextDec>Customers say</TextDec>
              </Title>
            </TitleContainer>
            <ButtonContainer>
              <div style={{ display: "flex", gap: "10px" }}>
                <div onClick={prevSlide}><IconButtons type="left-arrow" /></div>
                <div onClick={nextSlide}><IconButtons type="right-arrow" /></div>
              </div>
            </ButtonContainer>
          </HeaderContainer>
        </TopContent>
        <Content>
          <View>
            {testimonials[currentIndex]}
            {width > 360 && testimonials[currentIndex+1]}
          </View>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Testimonial;
