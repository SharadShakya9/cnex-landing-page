import React from 'react'
import Testimonials from './Testimonials'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

function TestimonialFactory({type}) {
  switch(type) {
    case "1":
      return (
        <Wrapper>
          <Testimonials type="testimonial1"/>
          
        </Wrapper>
      )
    case "2":
      return (
        <Wrapper>
          <Testimonials type="testimonial2"/>
          
        </Wrapper>
      )
  }
}

export default TestimonialFactory
