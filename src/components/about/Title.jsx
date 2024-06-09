import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 180px;
  height: 14px;
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
  width: 84px;
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FF785A;
`

function Title() {
  return (
    <div>
      <Wrapper>
        <Line/>
        <Text>ABOUT US</Text>
      </Wrapper>
    </div>
  )
}

export default Title
