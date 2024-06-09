import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/body/HeroSection'
import About from './components/about'
import Facts from './components/fact/Facts'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const Connected = styled.div`
  position: absolute;
  z-index: 0;
`
const Over = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 720px;
`

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Connected>
          <HeroSection/>
          <About/>
        </Connected>
        <Over><Facts/></Over>
      </Container>
    </>
  )
}

export default App
