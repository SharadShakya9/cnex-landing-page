import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    display: flex;
    height: 322.59px;

    @media (max-width: 360px) {
        width: 100%;
        height: 184px;
        justify-content: center;
    }
`

export const Content = styled.div`
    width: 48.95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 320px;
    }
`

export const TitleContainer = styled.div`
    text-align: left;
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
        font-size: 22px;
        line-height: 28px;   
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
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: #C3C4C5;

    @media (max-width: 360px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`

export const Download = styled.div`
    display: flex;
    gap: 14px;

    @media (max-width: 360px) {
        gap: 10px;
    }
`

export const Image = styled.img`
    width: 238.08px;
    height: 70.59px;
    cursor: pointer;

    @media (max-width: 360px) {
        width: 120px;
        height: 37px;
    }
`