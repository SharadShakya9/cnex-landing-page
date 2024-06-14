import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 175px;
  height: 50px;
  border-radius: 8px;
  padding: 13px 24px;
  background-color: #082D4A;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 360px) {
    width: 106px;
    height: 26px;
    border-radius: 4px;
    padding: 5px 12px;
    font-size: 10px;
    line-height: 16px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
  }
`;

const ButtonFactory = ({ name }) => {
  return (
    <ButtonStyle>{name}</ButtonStyle>
  );
};

export default ButtonFactory;
