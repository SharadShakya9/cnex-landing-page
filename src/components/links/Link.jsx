import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'

const Links = styled.div`
  width: auto;
  padding: 10px 24px;;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 360px) {
    padding: 0;
    font-size: 11px;
    line-height: 16px;
  }
`

const LinksHome = styled.a`
  width: 46px;
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #082D4A;
  text-decoration: none;

  @media (max-width: 360px) {
    display: flex;
  }
`
const LinksAboutUs = styled.a`
  width: 70px;
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #082D4A;
  text-decoration: none;

  @media (max-width: 360px) {
    display: flex;
  } 
`
const LinksFAQ = styled.a`
  width: 34px;
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #082D4A;
  text-decoration: none;

  @media (max-width: 360px) {
    display: flex;
  }
`
const LinksContactUs = styled.a`
  width: 87px;
  height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #082D4A;
  text-decoration: none;

  @media (max-width: 360px) {
    display: flex;
    
  }
`

const Link = ({name}) => {

  switch(name) {
    case "Home":
      return (
        <Links>
          <LinksHome href="#home">Home</LinksHome>
        </Links>
      )
    case "About us":
      return (
        <Links>
          <LinksAboutUs href='#about'>About us</LinksAboutUs>
        </Links>
      )
    case "FAQ":
      return (
        <Links>
          <LinksFAQ href="#faq">FAQ</LinksFAQ>
        </Links>
      )
    case "Contact us":
      return (
        <Links>
          <LinksContactUs href="#contact">Contact us</LinksContactUs>
        </Links>
      )
  }
}

export default Link
