import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -68px;
  position: absolute;
  z-index: 5;

  @media (max-width: 360px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  height: 136px;
  border-radius: 8px;
  padding: 30px 40px;
  background-color: #082d4a;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px #03121E40;
`;

const Factos = styled.div`
  width: 152px;
  height: 76px;
  color: white;
  background: transparent;
  text-align: center;
  font-family: "Be Vietnam Pro", sans serif;
  color: white;
`;

const FactosFirst = styled.div`
  width: 143px;
  height: 76px;
  color: white;
  background: transparent;
  text-align: center;
  font-family: "Be Vietnam Pro", sans serif;
  color: white;
`;

const BigText = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
`;

const SmallText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

function Facts() {
  return (
    <Container>
      <Wrapper>
        <FactosFirst>
          <BigText>200+</BigText>
          <SmallText>Clients Worldwide</SmallText>
        </FactosFirst>
        <Factos>
          <BigText>100+</BigText>
          <SmallText>Client Satisfaction</SmallText>
        </Factos>
        <Factos>
          <BigText>99K+</BigText>
          <SmallText>Number of Sales</SmallText>
        </Factos>
        <Factos>
          <BigText>24H</BigText>
          <SmallText>Team Support</SmallText>
        </Factos>
      </Wrapper>
    </Container>
  );
}

export default Facts;
