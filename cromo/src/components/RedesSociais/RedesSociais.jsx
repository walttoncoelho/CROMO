import React from 'react'
import { IconSocial } from './Style'
import Instagram from "./img/instagram.svg";
import Facebook from "./img/facebook.svg";

export default function RedesSociais() {
  return (
                   <IconSocial>

                  <a href="/">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                   <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                   </IconSocial>
               
  )
}
