import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 581px;
    padding: 120px 0px 60px 0px;
    background-color: #082D4A;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        height: 744px;
        padding: 40px 0;
    }
`

export const Container = styled.div`
    width: 85%;
    height: 401px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 89.7%;
        height: 664px;
    }
`

export const Title = styled.div`
    width: 266px;
    height: 56px;
    font-family: "Be Vietnam Pro", sans serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #FFF;

    @media (max-width: 360px) {
        width: 105px;
        height: 24px;
        font-size: 18px;
        font-weight: 600;
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

export const ReasonContainer = styled.div`
    width: 85%;
    height: 285px;
    display: flex;
    justify-content: space-between;
    background-color: #082D4A;

    @media (max-width: 360px) {
        width: 100%;
        height: 616px;
        flex-direction: column;
    }
`

export const Reasons = styled.div`
    width: 24%;
    height: 100%;
    border-radius: 8px;
    padding: 25px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #062237;

    @media (max-width: 360px) {
        width: 100%;
        height: 142px;
        border-radius: 4px;
        padding: 12px;
    }
`

export const ReasonContent = styled.div`
    height: 166px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Be Vietnam Pro", sans serif;
    text-align: center;

    @media (max-width: 360px) {
        height: 82px;
    }
`

export const ReasonTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #FFF;

    @media (max-width: 360px) {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
    }
`

export const InnerContent = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #C3C4C5;

    @media (max-width: 360px) {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
    }
`