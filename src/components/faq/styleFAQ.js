import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 852.94px;
    padding: 60px 0px 120px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;

    @media (max-width: 360px) {
        height: 1001px;
        padding: 20px 0 40px 0;
    }
`

export const Container = styled.div`
    width: 85%;
    height: 672.94px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 360px) {
        width: 320px;
        height: 941px;
    }
`

export const TitleContainer = styled.div`
    width: 635px;
    height: 155px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 360px) {
        width: 100%;
        height: 92px;
    }
`

export const Title = styled.div`
    width: 100%;
    height: 56px;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #1B1B1C;

    @media (max-width: 360px) {
        height: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
    }
`

export const TextDec = styled.div`
  & {
      position: relative;
      display: inline-block;
      color: #FF785A;
  }
  &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2px;
      height: 3px;
      background-color: #FF785A;
      width: 100%;
  }
`

export const SubText = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #86888A;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    @media (max-width: 360px) {
        height: 36px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }
`

export const FaqContent = styled.div`
    width: 100%;
    height: 457.94px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 360px) {
        flex-direction: column;
        height: 833px;
    }
`

export const FaqItems = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 360px) {
        width: 100%;
        height: 496px;
    }
`

export const ImageWrapper = styled.img`
    width: 400px;
    height: 100%;
    
    @media (max-width: 360px) {
        order: -1;
        width: 100%;
        height: 321px;
    }
`