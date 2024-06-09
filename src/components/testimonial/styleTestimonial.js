import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 719px;
    padding: 120px 0px 60px 0px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 85%;
    height: 539px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

export const TopContent = styled.div`
    width: 100%;
    height: 120px;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    height: 120px;
`

export const TitleContainer = styled.div`
    width: 80%;
    height: 98px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Title = styled.div`
    height: 56px;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #1B1B1C;
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
`