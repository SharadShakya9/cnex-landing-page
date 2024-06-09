import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/body/HeroSection'
import About from './components/about'
import Facts from './components/fact/Facts'
import styled from 'styled-components'
import Story from './components/story'
import Reason from './components/reason'
import Feature from './components/feature'
import Testimonial from './components/testimonial'

const Container = styled.div`
  display: grid;
  grid-template-rows: 721px 68px 68px 1068px;
  grid-template-columns: 7.5% 85% 7.5%;
`

const Hero = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 /4;
`

const AboutWrapper = styled.div`
  grid-row: 3 / 5;
  grid-column: 1 /4;
`

const Over = styled.div`
  z-index: 1;
  grid-area: 2 / 2 / 4 / 3;
`

function App() {
  return (
    <>
      <Navbar />
      <Container>
          <Hero><HeroSection/></Hero>
          <Over><Facts/></Over>
          <AboutWrapper><About/></AboutWrapper>
      </Container>
      <Story/>
      <Reason/>
      <Feature/>
      <Testimonial/>
    </>
  )
}

export default App
