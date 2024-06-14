import React from "react";
import {
  Container,
  FormButton,
  FormContainer,
  HeaderContent,
  SubText,
  TextDec,
  Title,
  TitleContainer,
  Wrapper,
} from "./styleConnect";
import Header from "./Header";
import Form from "./Form";
import IconFactory from "../icons/IconFactory";

function Connect() {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <HeaderContent>
            <Header />
            <Title>
              <TextDec>Connect</TextDec> with Us
            </Title>
          </HeaderContent>
          <SubText>
            Fill out the form below, and we will get back to you as soon as
            possible
          </SubText>
        </TitleContainer>
        <FormContainer>
          <Form />
        </FormContainer>
        <FormButton>Get in touch <IconFactory type="right-arrow-white" /></FormButton>
      </Container>
    </Wrapper>
  );
}

export default Connect;
