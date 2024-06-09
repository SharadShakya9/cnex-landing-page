import React from "react";
import {
  ButtonContainer,
  Container,
  HeaderContainer,
  TextDec,
  Title,
  TitleContainer,
  TopContent,
  Wrapper,
} from "./styleTestimonial";
import Header from "../feature/Header";
import IconButtons from "../buttons/IconButtons";

function Testimonial() {
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
                <IconButtons type="left-arrow" />
                <IconButtons type="right-arrow" />
              </div>
            </ButtonContainer>
          </HeaderContainer>
        </TopContent>
      </Container>
    </Wrapper>
  );
}

export default Testimonial;
