import React from "react";
import IconFactory from "../icons/IconFactory";
import Link from "../links/Link";
import ButtonFactory from "../buttons/ButtonFactory";
import { NavWrapper, Wrapper, NavLinks } from "./styleNavbar";


const Navbar = () => {
  return (
    <Wrapper>
      <NavWrapper>
        <IconFactory />
        <NavLinks>
          <Link name="Home" />
          <Link name="About us" />
          <Link name="FAQ" />
          <Link name="Contact us" />
        </NavLinks>
        <ButtonFactory name="Download Now" />
      </NavWrapper>
    </Wrapper>
  );
};

export default Navbar;
