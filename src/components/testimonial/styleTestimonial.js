import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 719px;
    padding: 120px 0px 60px 0px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        height: 332px;
        padding: 40px 0 20px 0;
    }
`

export const Container = styled.div`
    width: 85%;
    height: 539px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 360px) {
        height: 272px;
        width: 320px;
    }
`

export const TopContent = styled.div`
    width: 100%;
    height: 120px;

    @media (max-width: 360px) {
        height: auto;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 120px;
    border-bottom: 1px solid #DBDBDC;

    @media (max-width: 360px) {
        border: none;
        flex-direction: column;
        height: auto;
        gap: 10px;
    }
`

export const TitleContainer = styled.div`
    width: 80%;
    height: 98px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 100%;
        height: auto;
        align-items: center;
    }
`

export const Title = styled.div`
    height: 56px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #1B1B1C;

    @media (max-width: 360px) {
        height: 24px;
        width: 220px;
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

export const ButtonContainer = styled.div`
    width: 20%;
    height: 98px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 360px) {
        height: 24px;
        width: 56px;
        width: 100%;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 351px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 360px) {
        height: 167px;
    }
`

export const View = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`