import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    padding: 15px 0px 15px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 0;

    @media (max-width: 360px) {
        height: 64px;
        padding: 10px 0;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    width: 85%;
    height: 50px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 360px) {
        width: 95%;
        height: 40px;
        justify-content: space-around;
    }
`
export const NavLinks = styled.div`
    width: 459px;
    height: 44px;
    display: flex;
    gap: 10px;

    @media (max-width: 360px) {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    &.active {
      display: flex;
    }
  }
`

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 360px) {
        display: block;
       
    }
`

export const DropdownMenu = styled.div`
    background-color: white;
    border: 1px solid #082D4A;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: fixed;
    z-index: 999;
    right: 5px;
    top: 50px;
`