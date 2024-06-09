import React from 'react'
import cnexLogo from "../../assets/images/logo.png"
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
import styled from 'styled-components'

const Cnex = styled.div`
  width: 138.17px;
  height: 50px;
`

const Reason = styled.div`
  height: 45px;
`

const Feature = styled.div`
  width: 40px;
  height: 40px;
`

const Icon = styled.div`
  width: 30px;
  height: 30px;
`

const IconFactory = ({type}) => {
  switch (type) {
    case "cnex": return <Cnex><img src={cnexLogo} alt="logo" /></Cnex>
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
    case "left-arrow":
      return (
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="black" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </Icon>
      )
  }
}

export default IconFactory
