import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 40%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MessageWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Label = styled.label`
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #000000;
`

const Input = styled.input`
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  border: none;
  border-bottom: 1px solid #86888A;
  &::placeholder{
    color: #86888A;
  }
  &:focus{
    outline: none;
  }
`

function LabelAndInput({label, placeholder}) {
  if (label == "Message") {
    return (
      <MessageWrapper>
        <Label htmlFor={label}>{label}</Label>
        <Input type="text" placeholder={placeholder} />
      </MessageWrapper>
    )
  } else {
    return (
      <Wrapper>
        <Label htmlFor={label}>{label}</Label>
        <Input type="text" placeholder={placeholder} />
      </Wrapper>
    )
  }
}

export default LabelAndInput
