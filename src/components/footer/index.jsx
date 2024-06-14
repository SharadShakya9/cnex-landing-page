import React from 'react'
import { Wrapper, Content, FooterContent, Logo, ContactContainer, SocialIcons, FooterTitle, ServiceContainer, TextContent, Download, Image, CopyrightContainer, Copyright, DownloadContainer } from './styleFooter'
import IconFactory from '../icons/IconFactory'
import appStore from "../../assets/images/app-store.png"
import googlePlay from "../../assets/images/google-play.png"


function Footer() {
  return (
    <Wrapper id='contact'>
      <Content>
        <FooterContent>
          <Logo><IconFactory type="cnex-white"/></Logo>
          <ContactContainer>
            <FooterTitle>Contact us</FooterTitle>
            <TextContent>
              <p>Head office:</p>
              <p>Sankhamul, Baneshwor</p>
              <p>+977 98********</p>
              <p>cnex@gmail.com</p>
            </TextContent>
            <SocialIcons>
              <IconFactory type="facebook" />
              <IconFactory type="instagram" />
              <IconFactory type="twitter" />
            </SocialIcons>
          </ContactContainer>
          <ServiceContainer>
            <FooterTitle>Services</FooterTitle>
            <TextContent>
              <p>Order and Pre-order</p>
              <p>Beauty service Appointment Booking</p>
              <p>Order and Pre-order</p>
              <p>Order and Pre-order</p>
            </TextContent>
          </ServiceContainer>
          <DownloadContainer>
            <FooterTitle>Download our App</FooterTitle>
            <Download>
              <Image src={appStore} alt="app store" />
              <Image src={googlePlay} alt="google play" />
            </Download>
          </DownloadContainer>
        </FooterContent>
        <CopyrightContainer>
          <Copyright>Copyright © 2024 Cnex. All rights reserved. Powered by:<IconFactory type="maskgroup"/></Copyright>
        </CopyrightContainer>
      </Content>
    </Wrapper>
  )
}

export default Footer
