import React from "react";
import MenuMobile from "../MenuMobile/MenuMobile";
import { Container, MenuContainer, Nav, NavItem, NavLinkStyled } from "./Style";
import logoImg from "./img/logo.svg";

export default function Navbar() {
  return (
    <>
      <Container>
        <Nav>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
          <MenuContainer>

            <ul >
              <NavItem>
                <NavLinkStyled exact to="/" activeClassName="active">
                  Home
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/empreendimentos" activeClassName="active">
                  Empreendimentos
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/sobre" activeClassName="active">
                  Sobre
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/faleconosco" activeClassName="active">
                  Fale conosco
                </NavLinkStyled>
              </NavItem>
            </ul>
          </MenuContainer>
        </Nav>

        <MenuMobile />
      </Container>
    </>
  );
}
