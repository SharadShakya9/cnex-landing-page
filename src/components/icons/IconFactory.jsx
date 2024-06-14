import React from 'react'
import cnexLogo from "../../assets/images/logo.png"
import cnexwhiteLogo from "../../assets/images/logowhite.png"
import fastIcon from "../../assets/icons/fast.png"
import easyIcon from "../../assets/icons/easy.png"
import affordableIcon from "../../assets/icons/affordable.png"
import legalSupportIcon from "../../assets/icons/legalsupport.png"
import bookingIcon from "../../assets/icons/booking.png"
import orderIcon from "../../assets/icons/order.png"
import searchIcon from "../../assets/icons/search.png"
import filterIcon from "../../assets/icons/filter.png"
import deliveryIcon from "../../assets/icons/delivery.png"
import paymentIcon from "../../assets/icons/payment.png"
import fbIcon from "../../assets/images/social/fb.png"
import instaIcon from "../../assets/images/social/instagram.png"
import twitterIcon from "../../assets/images/social/twitter.png"
import maskGroup from "../../assets/icons/maskgroup.png"
import bars from "../../assets/icons/bars.png"
import styled from 'styled-components'

const Cnex = styled.div`
  width: 138.17px;
  height: 50px;

  @media (max-width: 360px) {
    width: 80px;
    height: 30px;

    & > img {
      width: 80px;
      height: 30px;
    }
  }
`

const Reason = styled.div`
  height: 45px;

  @media (max-width: 360px) {
      height: 20px;
      width: 14.55px;

      & > img {
        height: 20px;
      }
  }
`

const Feature = styled.div`
  width: 40px;
  height: 40px;

  @media (max-width: 360px) {
    width: 17.83px;
    height: 20px;

    & > img {
      height: 20px;
    }
  }
`

const Icon = styled.div`
  width: 30px;
  height: 30px;

  @media (max-width: 360px) {
        width: 9px;
        height: 9px;
    }
`

const FormIcon = styled.div`
  width: 16px;
  height: 16px;
`

const Social = styled.div`
  width: 24px;
  height: 24px;

  @media (max-width: 360px) {
    width: 16px;
    height: 16px;

    & > img {
      width: 16px;
      height: 16px;
    }
  }
`

const Bars = styled.div`
  width: 18px;
  height: 12px;
`

const CnexWhite = styled.div`
  width: 138.17px;
  height: 50px;

  @media (max-width: 360px) {
    width: 165.81px;
    height: 60px;

    & > img {
      width: 165.81px;
      height: 60px;
    }
  }
`

const Mask = styled.div`
  width: 58.33px;
  height: 20px;

  & > img {
    width: 58.33px;
    height: 20px;
  }

  @media (max-width: 360px) {
    width: 35px;
    height: 12px;
    position: absolute;
    bottom: 0px;
    right: 20px;

    & > img {
      width: 35px;
      height: 12px;
    }
  }
`

const IconFactory = ({type}) => {
  switch (type) {
    case "cnex": return <Cnex><img src={cnexLogo} alt="logo" /></Cnex>
    case "cnex-white": return <CnexWhite><img src={cnexwhiteLogo} alt="logo" /></CnexWhite>
    case "fast": return <Reason><img src={fastIcon} alt="fast" /></Reason>
    case "easy": return <Reason><img src={easyIcon} alt="easy" /></Reason>
    case "affordable": return <Reason><img src={affordableIcon} alt="affordable" /></Reason>
    case "legalsupport": return <Reason><img src={legalSupportIcon} alt="legal support" /></Reason>
    case "booking": return <Feature><img src={bookingIcon} alt="booking" /></Feature>
    case "order": return <Feature><img src={orderIcon} alt="order" /></Feature>
    case "search": return <Feature><img src={searchIcon} alt="search" /></Feature>
    case "filter": return <Feature><img src={filterIcon} alt="filter" /></Feature>
    case "delivery": return <Feature><img src={deliveryIcon} alt="delivery" /></Feature>
    case "payment": return <Feature><img src={paymentIcon} alt="payment" /></Feature>
    case "right-arrow":
      return (
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="black" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
        </Icon>
      )
    case "right-arrow-white":
      return (
        <FormIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
        </FormIcon>
      )
    case "left-arrow":
      return (
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="black" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </Icon>
      )
    case "facebook": return <Social><img src={fbIcon} alt="facebook" /></Social>
    case "instagram": return <Social><img src={instaIcon} alt="facebook" /></Social>
    case "twitter": return <Social><img src={twitterIcon} alt="facebook" /></Social>
    case "maskgroup": return <Mask><img src={maskGroup} alt="mask group" /></Mask>
    case "bars": return <Bars><img src={bars} alt="bars" /></Bars>
  }
}

export default IconFactory
