import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 163px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Line = styled.div`
  width: 26px;
  height: 0px;
  border: 2px solid #FF785A;
`
const Text = styled.div`
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FF785A;
`

function Header() {
  return (
      <Wrapper>
        <Line/>
        <Text>Reach Out to Us</Text>
      </Wrapper>
  )
}

export default Header