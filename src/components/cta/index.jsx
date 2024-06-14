import React from 'react'
import styled from 'styled-components'
import ctaImage from '../../assets/images/cta/cta.jfif'
import appStore from "../../assets/images/app-store.png"
import googlePlay from "../../assets/images/google-play.png"
import { Content, Download, SubText, TextDec, Title, TitleContainer, Image } from './styleCta'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 555px;
    background-image: url(${ctaImage});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 555px;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }

    @media (max-width: 360px) {
        height: 164px;

        &::before {
            height: 164px;
        }
    }
`


function Cta() {
  return (
    <Wrapper>
        <Content>
            <TitleContainer>
                <Title>Join the <TextDec>CNEX Community</TextDec> Today!</Title>
            </TitleContainer>
            <SubText>
                Download CNEX now to explore a world of female-centric products and services, and empower yourself with every purchase and booking
            </SubText>
            <Download>
                <Image src={appStore} alt="app-store" />
                <Image src={googlePlay} alt="google-play" />
            </Download>
        </Content>
    </Wrapper>
  )
}

export default Cta
