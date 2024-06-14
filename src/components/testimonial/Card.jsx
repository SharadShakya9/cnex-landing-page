import React from 'react'
import styled from 'styled-components'
import profilePic from "../../assets/images/testimonial_images/profile1.png"
import CustomerContainer from './CustomerContainer'

const Wrapper = styled.div`
    width: 342px;
    height: 205.71px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 4px 10px 0px #00000014;
    background-color: #FFF;

    @media (max-width: 360px) {
        width: 163px;
        height: 100px;
        padding: 5px;
    }
`

const CardContent = styled.div`
    width: 85%;
    height: 145.71px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 360px) {
        height: auto;
    }
`

const ProfileContainer = styled.div`
    height: 100%;
`

const Image = styled.img`
    height: 45px;
    width: 35px;
    border-radius: 50%;
    background-color: #FF785A;

    @media (max-width: 360px) {
        width: 23.79px;
        height: 23.79px;
    }
`

const CommentContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    width: 100%;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #1B1B1C;

    @media (max-width: 360px) {
        font-size: 7.61px;
        line-height: 11.42px;
        text-align: left;
    }
`

const TextContent = styled.div`
    width: 100%;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: #3F486A;

    @media (max-width: 360px) {
        font-size: 5.71px;
        line-height: 8.56px;
    }
`

const CustomerDetail = styled.div`
    height: 35px;
    display: flex;
    align-items: flex-end;

    @media (max-width: 360px) {
        height: 9px;
    }
`



function Card() {
  return (
    <Wrapper>
        <CardContent>
            <ProfileContainer>
                <Image src={profilePic} alt="" />
            </ProfileContainer>
            <CommentContainer>
                <Title>“They did an amazing work for our home”</Title>
                <TextContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien</TextContent>
                <CustomerDetail>
                    <CustomerContainer/>
                </CustomerDetail>
            </CommentContainer>
        </CardContent>
    </Wrapper>
  )
}

export default Card
