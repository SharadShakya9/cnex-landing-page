import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 738px;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        display: none;
    }
`

export const StoryWrapper = styled.div`
    width: 85%;
    height: 558px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Title = styled.div`
    height: 56px;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: center;
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

export const Content = styled.div`
    display: flex;
    height: 476px;
    gap: 24px;
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Paragraph = styled.div`
    height: 398px;
    display: flex;
    flex-direction: column;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1B1B1C;
`

export const MainPara = styled.div`
    height: 122px;
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Button = styled.div`
    display: flex;
    align-items: flex-end;
    height: 75px;
`