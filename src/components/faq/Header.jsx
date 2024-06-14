import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 70px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Line = styled.div`
  width: 26px;
  height: 0px;
  border: 2px solid #FF785A;
`
const Text = styled.div`
  height: 26px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #FF785A;
`

function Header() {
  return (
      <Wrapper>
        <Line/>
        <Text>FAQ</Text>
      </Wrapper>
  )
}

export default Header