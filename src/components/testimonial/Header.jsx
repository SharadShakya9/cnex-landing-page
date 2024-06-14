import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 153px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 360px) {
      height: 16px;
      width: 106px;
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
  height: 26px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #FF785A;

  @media (max-width: 360px) {
      height: 16px;
      width: 82px;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: normal;
  }
`

function Header() {
  return (
      <Wrapper>
        <Line/>
        <Text>TESTIMONIAL</Text>
      </Wrapper>
  )
}

export default Header