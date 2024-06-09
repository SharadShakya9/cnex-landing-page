import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 994px;
    padding: 60px 0px 120px 0px;
    background-color: #082D4A;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 85%;
    height: 814px;
    background-color: #082D4A;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 144px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: #FFF;
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

export const MainTitle = styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SubText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #86888A;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const FeatureContainer = styled.div`
    width: 100%;
    height: 610px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
`

export const Features = styled.div`
    height: 285px;
    border-radius: 8px;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 45px;
    background-color: #062237;
`

export const FeatureContent = styled.div`
    height: 120px;
    font-family: "Be Vietnam Pro", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const FeatureTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #FFF;
`

export const InnerContent = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #C3C4C5;
`