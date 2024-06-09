import React from 'react'
import cnexLogo from "../../assets/images/logo.png"
import styled from 'styled-components'

const Icon = styled.div`
  width: 138.17px;
  height: 50px;
`

const IconFactory = () => {
  return (
    <Icon>
      <img src={cnexLogo} alt="logo" />
    </Icon>
  )
}

export default IconFactory
