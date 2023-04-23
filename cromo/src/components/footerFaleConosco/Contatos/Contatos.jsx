import React from "react";
import {
 
  ColumContato,

  ContatinerContato,
  IconSocial
} from "./Style";

import Instagram from "./img/instagram.svg";
import Facebook from "./img/facebook.svg";
import { ButtonFaleConosco } from "../../Bottons/Bottons";

export default function Contatos() {
  return (
    <>
     
        <ColumContato>
          <ContatinerContato>        
            <h1>Fale conosco</h1>
            <p>
              Você pode entrar em contato direto com nossa equipe comercial.
            </p>

            <ButtonFaleConosco>
              <p>+55 98 9 9999-9999</p>
            </ButtonFaleConosco>

            <ButtonFaleConosco>
              <p>contato@cromo.com.br</p>
            </ButtonFaleConosco>
           
              <a href="##" target="_blank" rel="noopener noreferrer">
                {/* <img src={instagram} alt="Instagram" /> */}

               
                <IconSocial>
                  <a href="/">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                   <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </IconSocial>
              </a>

              <a href="##" target="_blank" rel="noopener noreferrer">
              
              </a>
           
          </ContatinerContato>
        </ColumContato>

     
    </>
  );
}
