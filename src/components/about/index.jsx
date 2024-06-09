import React from 'react'
import TitleContainer from './TitleContainer'
import ImageList from './ImageList'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 1136px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  width: 85%;
  height: 892px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;
`

function About() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleContainer/>
        <ImageList/>
      </ContentWrapper>
    </Wrapper>
  )
}

export default About
