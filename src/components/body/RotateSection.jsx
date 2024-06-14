import React from "react";
import styled from "styled-components";
import phone from "../../assets/images/phone.png"

const Container = styled.div`
    width: 1600px;
    height: 1600px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(8, 45, 74, 0.4);
    z-index: 6;
    top: 446px;
    left: 779px;

    @media (max-width: 360px) {
        display: none;
    }
`

function RotateSection() {
  return (
    <Container>
        <img style={{position: 'absolute', top: '-210px', left: "138px"}} src={phone} alt="" />
    </Container>
  )
}

export default RotateSection;
