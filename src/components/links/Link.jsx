import React from 'react'
import styled from 'styled-components'

const Links = styled.div`
  width: auto;
  padding: 10px 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #082D4A;
`

const LinksHome = styled.div`
  width: 46px;
  height: 24px;
`
const LinksAboutUs = styled.div`
  width: 70px;
  height: 24px;
`
const LinksFAQ = styled.div`
  width: 34px;
  height: 24px;
`
const LinksContactUs = styled.div`
  width: 87px;
  height: 24px;
`

const Link = ({name}) => {
  switch(name) {
    case "Home":
      return (
        <Links>
          <LinksHome>Home</LinksHome>
        </Links>
      )
    case "About us":
      return (
        <Links>
          <LinksAboutUs>About us</LinksAboutUs>
        </Links>
      )
    case "FAQ":
      return (
        <Links>
          <LinksFAQ>FAQ</LinksFAQ>
        </Links>
      )
    case "Contact us":
      return (
        <Links>
          <LinksContactUs>Contact us</LinksContactUs>
        </Links>
      )
  }
}

export default Link
