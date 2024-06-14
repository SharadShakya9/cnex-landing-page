import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;

    @media (max-width: 360px) {
      height: 9px;
      gap: 3.33px
    }
`

const Line = styled.div`
  width: 25px;
  height: 0px;
  border: 1.4px solid #FF785A;

  @media (max-width: 360px) {
      width: 11.9px;
      border: 0.66px solid #FF785A;
  }
`
const Customer = styled.div`
  height: 18px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #FF785A;

  @media (max-width: 360px) {
      height: 9px; 
      font-size: 5.71px;
      line-height: 8.56px;
      text-align: left;
  }
`

function CustomerContainer() {
  return (
    <Wrapper>
        <Line/>
        <Customer>JOHN CARTER, NEW YORK</Customer>
    </Wrapper>
  )
}

export default CustomerContainer
