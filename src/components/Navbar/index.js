import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  MenuItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <MenuItem>
              <NavLinks to="about">About</NavLinks>
            </MenuItem>
            <MenuItem>
              <NavLinks to="discover">Discover</NavLinks>
            </MenuItem>
            <MenuItem>
              <NavLinks to="services">Services</NavLinks>
            </MenuItem>
            <MenuItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </MenuItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
