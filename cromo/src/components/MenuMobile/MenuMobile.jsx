import React, { useState } from 'react';
import { MenuButton, MenuList } from './styles';

function MenuMobile() {
 const [expanded, setExpanded] = useState(false);

  function toggleMenu() {
    setExpanded(!expanded);
  }



  return (
    <div className="menu">
      <MenuButton open={expanded} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      {expanded && (
        <MenuList>

          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="sobre">Sobre</a></li>
            <li><a href="contato">Contato</a></li>
          </ul>
        </MenuList>
      )}
    </div>
  );
}

export default MenuMobile;
