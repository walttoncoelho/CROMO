import React from 'react'
import { Link } from 'react-router-dom';
import {Nav, NavItem} from "./Style"

export default function Navbar() {
  return (
    <>
    
    <Nav>
      <ul>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/sobre">Sobre</Link></NavItem>
        <NavItem><Link to="/empreendimentos">Empreendimentos</Link></NavItem>
        <NavItem><Link to="/fale-conosco">Fale conosco</Link></NavItem>
      </ul>
    </Nav>
    </>
  )
}
