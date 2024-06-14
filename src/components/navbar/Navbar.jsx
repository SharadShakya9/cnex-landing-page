import React, { useState } from "react";
import IconFactory from "../icons/IconFactory";
import Link from "../links/Link";
import ButtonFactory from "../buttons/ButtonFactory";
import { NavWrapper, Wrapper, NavLinks, MenuButton, DropdownMenu } from "./styleNavbar";


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)

  function handleDropdown () {
    setDropdown(!dropdown)
  }
  
  return (
    <Wrapper>
      <NavWrapper>
        <IconFactory type="cnex" />
        <NavLinks>
          <Link name="Home" />
          <Link name="About us" />
          <Link name="FAQ" />
          <Link name="Contact us" />
        </NavLinks>
        <ButtonFactory name="Download Now" />
        <MenuButton onClick={handleDropdown}>
            <IconFactory type="bars"/>
            {dropdown ? 
            <DropdownMenu>
              <Link name="Home" />
              <Link name="About us" />
              <Link name="FAQ" />
              <Link name="Contact us" />
            </DropdownMenu>
          : ""  
          }
        </MenuButton>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navbar;
