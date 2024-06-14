import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 211px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 360px) {
    width: 144px;
    height: 16px;
  }
`

const Line = styled.div`
  width: 26px;
  height: 0px;
  border: 2px solid #FF785A;

  @media (max-width: 360px) {
      width: 14px;
      border: 1px solid #FF785A;
  }
`
const Text = styled.div`
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FF785A;

  @media (max-width: 360px) {
      height: 16px;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
  }
`

function Header() {
  return (
      <Wrapper>
        <Line/>
        <Text>FEATURE HIGHLIGHTS</Text>
      </Wrapper>
  )
}

export default Header