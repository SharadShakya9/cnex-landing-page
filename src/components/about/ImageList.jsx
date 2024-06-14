import React from 'react'
import styled from 'styled-components'
import About1 from "../../assets/images/about_images/about1.png"
import About2 from "../../assets/images/about_images/about2.png"
import About3 from "../../assets/images/about_images/about3.png"
import About4 from "../../assets/images/about_images/about4.png"
import About5 from "../../assets/images/about_images/about5.png"
import About6 from "../../assets/images/about_images/about6.png"
import About7 from "../../assets/images/about_images/about7.png"
import About8 from "../../assets/images/about_images/about8.png"

const Wrapper = styled.div`
    width: 85%;
    height: 672px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 320px;
        height: 729px;
    }
`

const ImageContainer1 = styled.div`
    width: 23%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 153.6px;
        height: 358.4px;
    }
`

const ImageContainer2 = styled.div`
    width: 49%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        order: 1;
        width: 100%;
        height: 358.4px;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const Image = styled.img`
    width: 100%;
    height: 296px;
    border-radius: 16px;
    object-fit: cover;

    @media (max-width: 360px) {
        height: 157.87px;
    }
`
const Image2 = styled.img`
    width: 100%;
    height: 352px;
    border-radius: 16px;
    object-fit: cover;

    @media (max-width: 360px) {
        height: 187.73px;
    }
`
const Image3 = styled.img`
    width: 100%;
    height: 208px;
    border-radius: 16px;

    @media (max-width: 360px) {
        height: 110.93px;
    }
`

const Image4 = styled.img`
    width: 48%;
    height: 296px;

    @media (max-width: 360px) {
        height: 157.87px;
    }
`

function ImageList() {
  return (
    <Wrapper>
        <ImageContainer1>
            <Image src={About1} alt="about1" />
            <Image2 src={About2} alt="about2" />
        </ImageContainer1>
        <ImageContainer2>
            <ImageWrapper>
                <Image4 src={About3} alt="about3" />
                <Image4 src={About4} alt="about4" />
            </ImageWrapper>
            <Image2 src={About5} alt="about5" />
        </ImageContainer2>
        <ImageContainer1>
            <Image3 src={About6} alt="about6" />
            <Image3 src={About7} alt="about7" />
            <Image3 src={About8} alt="about8" />
        </ImageContainer1>
    </Wrapper>
  )
}

export default ImageList
