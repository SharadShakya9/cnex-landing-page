import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/body/HeroSection'
import About from './components/about'
import Story from './components/story'
import Reason from './components/reason'
import Feature from './components/feature'
import Testimonial from './components/testimonial'
import Faq from './components/faq'
import Cta from './components/cta'
import Connect from './components/connect'
import Footer from './components/footer'


function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
    
      <About/>
      <Story/>
      <Reason/>
      <Feature/>
      <Testimonial/>
      <Faq/>
      <Cta/>
      <Connect />
      <Footer/>
    </>
  )
}

export default App
