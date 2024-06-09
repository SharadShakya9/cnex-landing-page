import React from 'react'
import './hero.css'
import appStore from "../../assets/images/app-store.png"
import googlePlay from "../../assets/images/google-play.png"
// import phone from "../../assets/images/phone.png"

const HeroSection = () => {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <div className="title">
              <p className='description'><span>Experience</span> the Future of Female Commerce <br></br>with <span>Cnex</span></p>
              <p className='subtext'>Order, Preorder and Book - Your Ultimate Destination for Female Products and Services</p>
              <div className='get-app'>
                <img src={appStore} alt="app-store" />
                <img src={googlePlay} alt="google-play" />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
