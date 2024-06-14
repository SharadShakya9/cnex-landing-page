import React from 'react'
import TitleContainer from './TitleContainer'
import ImageList from './ImageList'
import styled from 'styled-components'
import Facts from '../fact/Facts'
import ButtonFactory from '../buttons/ButtonFactory'

const Container = styled.div`
  width: 100%;
  height: 1136px;
  background: white;

  @media (max-width: 360px) {
    height: 1109px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  margin-top: 136px;
  width: 85%;
  height: 892px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex-direction: column;


  @media (max-width: 360px) {
    margin: 0;
    width: 320px;
    height: 1029px;
    align-items: flex-start;
  }
`

const Story = styled.div`
  display: none;

  @media (max-width: 360px) {
    display: flex;
    width: 100%;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #1B1B1C;
  }
`

const StoryButton = styled.div`
  display: none;

  @media (max-width: 360px) {
    display: block;
  }
`

function About() {
  return (
    <Container id='about'>
    <Facts/>
    <Wrapper>
      <ContentWrapper>
        <TitleContainer/>
        <ImageList/>
        <Story>
          At the beginning, it was just the two of them, working out of a small office space. They were determined to provide personalized service to their clients and build lasting relationships. They worked tirelessly, often working long hours and weekends to ensure that their clients needs were met. 
        </Story>
        <StoryButton><ButtonFactory name="Get in touch" /></StoryButton>
      </ContentWrapper>
    </Wrapper>
    </Container>
  )
}

export default About
