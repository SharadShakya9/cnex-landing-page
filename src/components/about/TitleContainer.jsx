import React from 'react'
import Title from './Title'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 912px;
    height: 160px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 360px) {
      width: 320px;
      height: 80px;
      justify-content: space-between;
    }
`
const Text = styled.div`
    height: 112px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: center;

    @media (max-width: 360px) {
      height: 48px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: normal;
    }
`

const TextDec = styled.div`
      position: relative;
      display: inline-block;
      color: #FF785A;
  &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2px;
      height: 3px;
      background-color: #FF785A;
      width: 100%;
  }

  @media (max-width: 360px) {
    text-decoration: underline;
    &:after {
      display: none;
    }
  }
`

function TitleContainer() {
  return (
    <Wrapper>
      <Title/>
      <Text><TextDec>Pioneering Female</TextDec>-Centric Solutions for the Modern Women </Text>
    </Wrapper>
  )
}

export default TitleContainer