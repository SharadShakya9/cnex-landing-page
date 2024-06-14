import React from 'react'
import styled from 'styled-components'
import testimonial1 from '../../assets/images/testimonial_images/testimonial1.png'
import testimonial2 from '../../assets/images/testimonial_images/testimonial2.png'
import Card from './Card'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    /* @media (max-width: 360px) {
        width: 100%;
    } */
`

const BigCard = styled.div`
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    max-width: 100%;
    max-height: 351px;
    object-fit: cover;
`

const SmallCard= styled.div`
    width: 20%;
    transform: translate(-200%, 20%);
    z-index: 1;
`

function Testimonials({type}) {
    switch (type) {
        case "testimonial1":
            return (
                <>
                <Wrapper>
                    <BigCard>
                        <Image src={testimonial1} alt=""/>
                    </BigCard>
                    <SmallCard>
                        <Card/>
                    </SmallCard>
                </Wrapper>
                </>
              )
        case "testimonial2":
            return (
                <>
                <Wrapper>
                    <BigCard>
                        <Image src={testimonial2} alt=""/>
                    </BigCard>
                    <SmallCard>
                        <Card/>
                    </SmallCard>
                </Wrapper>
                </>
              )
    }
  
}

export default Testimonials
