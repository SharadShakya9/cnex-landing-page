import React from 'react'
import { Container, TitleContainer, Wrapper, Title, TextDec, SubText, FaqContent, FaqItems, ImageWrapper } from './styleFAQ'
import Header from './Header'
import FaqItem from './FaqItem'
import faqImage from "../../assets/images/faqs/faq.png"

function Faq() {
  return (
    <Wrapper id='faq'>
        <Container>
            <TitleContainer>
                <Header/>
                <Title><TextDec>Frequently</TextDec> Asked Questions</Title>
                <SubText>
                    Discover a World of Female-Centric Products and Services
                </SubText>
            </TitleContainer>
            <FaqContent>
                <FaqItems>
                    <FaqItem/>
                    <FaqItem/>
                    <FaqItem/>
                    <FaqItem/>
                </FaqItems>
                <ImageWrapper src={faqImage} alt="faq image" />
            </FaqContent>
        </Container>
    </Wrapper>
  )
}

export default Faq
