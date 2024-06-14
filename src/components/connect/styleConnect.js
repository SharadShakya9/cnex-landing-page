import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 861px;
    padding: 120px 0;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        display: none;
    }
`

export const Container = styled.div`
    width: 70.56%;
    height: 621px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 155px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

export const Title = styled.div`
    width: 100%;
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

export const SubText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #86888A;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FormButton = styled.button`
  width: 168px;
  height: 50px;
  border-radius: 8px;
  padding: 13px 24px;
  background-color: #082D4A;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  cursor: pointer;
`;