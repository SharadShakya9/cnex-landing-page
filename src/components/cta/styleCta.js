import styled from "styled-components";

export const Content = styled.div`
    width: 85%;
    height: 248px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 360px) {
        width: 299px;
        height: 84px;
    }
`

export const TitleContainer = styled.div`
    width: 608px;
    height: 112px;
    text-align: center;

    @media (max-width: 360px) {
        width: 100%;
        height: 24px;
    }
`

export const Title = styled.div`
    width: 100%;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #FFF;

    @media (max-width: 360px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: normal;
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
    width: 608px;
    height: 48px;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #C3C4C5;

    @media (max-width: 360px) {
        display: none;
    }
`

export const Download = styled.div`
    width: 608px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 14px;

    @media (max-width: 360px) {
        width: 259.99px;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 171.36px;
    height: 50px;
    cursor: pointer;

    @media (max-width: 360px) {
        width: 124.8px;
        height: 37px;
    }
`