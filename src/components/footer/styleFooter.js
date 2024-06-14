import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 120px 0px;
    background-color: #082D4A;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        height: 720px;
        padding: 40px 0;
    }
`

export const Content = styled.div`
    width: 85%;
    height: 292px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        width: 259.99px;
        height: 624.28px;
    }
`

export const FooterContent = styled.div`
    width: 100%;
    height: 208px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 360px) {
        height: 560.28px;
        flex-direction: column;
    }
`

export const Logo = styled.div`
    height: 100%;

    @media (max-width: 360px) {
        height: 60px;
    }
`

export const ContactContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        height: 152px;
        width: 100%;
    }
`

export const FooterTitle = styled.div`
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #fff;

    @media (max-width: 360px) {
        height: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: normal;
    }
`

export const TextContent = styled.div`
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 360px) {
        height: 84px;
        font-size: 12px;
        line-height: 18px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 360px) {
        gap: 8px;   
    }
`

export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (max-width: 360px) {
        height: 122px;
    }
`

export const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (max-width: 360px) {
        width: 100%;
        height: 74.28px;
        gap: 0;
        justify-content: space-between;
    }
`

export const Download = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 360px) {
        width: 100%;
        height: 36px;
        flex-direction: row;
        gap: 0;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 190px;
    height: 55px;
    cursor: pointer;

    @media (max-width: 360px) {
        width: 124.8px;
        height: 37px;
    }
`

export const CopyrightContainer = styled.div`
    width: 100%;
    height: 44px;
    border-top: 1px solid #D1D3DC;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 360px) {
        height: 56px;
    }
`

export const Copyright = styled.div`
    display: flex;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #D1D3DC;

    @media (max-width: 360px) {
        font-size: 11px;
        line-height: 16px;
        position: relative;
    }
`