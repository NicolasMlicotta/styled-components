import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 2;
`;

const NavLink = css`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

const Logo = styled(Link)`
  ${NavLink};
  font-weight: bold;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    color: #fff;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink};
  cursor: pointer;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="login">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
