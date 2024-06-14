import React from 'react'
import styled from 'styled-components'
import LabelAndInput from './LabelAndInput'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

function Form() {
  return (
    <Wrapper>
    <Wrapper>
        <LabelAndInput label="Name" placeholder="Your Full Name" />
        <LabelAndInput label="Email" placeholder="email@sample.com" />
        <LabelAndInput label="Phone number" placeholder="+977-98********" />
        <LabelAndInput label="Subject" placeholder="Service name" />
    </Wrapper>
    <LabelAndInput label="Message" placeholder="Kindly explain your needed service you are interested in..." />
    </Wrapper>
  )
}

export default Form
