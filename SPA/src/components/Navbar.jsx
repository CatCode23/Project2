import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import RandomHeroButton from "./RandomHeroButton";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/Heroes">Heroes</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/Villains">Villains</StyledLink>
        </NavItem>
        <NavItem>
          <RandomHeroButton />
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 25px;
  max-width: auto;
  position: sticky;
  top: 0;
  z-index: 10;
  background-image: url("/images/marvelheroes.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 8px;
  font-size: 2rem;
  font-weight: bold; /* Make the text bold */
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    color: #def;
  }
`;
