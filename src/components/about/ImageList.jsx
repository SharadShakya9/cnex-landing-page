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
    gap: 24px;
`

const ImageContainer1 = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    gap: 24px;
`

const ImageContainer2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 55%;
    height: 100%;
    gap: 24px;
`

function ImageList() {
  return (
    <Wrapper>
        <ImageContainer1>
            <img src={About1} alt="about1" />
            <img src={About2} alt="about2" />
        </ImageContainer1>
        <ImageContainer2>
            <img src={About3} alt="about3" />
            <img src={About4} alt="about4" />
            <img src={About5} alt="about5" />
        </ImageContainer2>
        <ImageContainer1>
            <img src={About6} alt="about6" />
            <img src={About7} alt="about7" />
            <img src={About8} alt="about8" />
        </ImageContainer1>
    </Wrapper>
  )
}

export default ImageList
