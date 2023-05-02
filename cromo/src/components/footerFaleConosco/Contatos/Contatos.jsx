import React from "react";
import {
  ColumContato,
  ContainerContato,
  IconSocial
} from "./Style";

import Instagram from "./img/instagram.svg";
import Facebook from "./img/facebook.svg";
import { ButtonFaleConosco, RowImput } from "../../Bottons/Bottons";
import Phone from "./img/Phone.svg";
import Email from "./img/mail.svg";

export default function Contatos() {
  return (
    <>

      <ColumContato>
        <ContainerContato>
          <h1>Fale conosco</h1>
          <p>
            Você pode entrar em contato direto com nossa equipe comercial.
          </p>

          <ButtonFaleConosco>
            <RowImput>
              <img src={Phone} alt="Phone" />
              <p>+55 98 9 9999-9999</p>
            </RowImput>
          </ButtonFaleConosco>

          <ButtonFaleConosco>
            <RowImput>
              <img src={Email} alt="Email" />
              <p>contato@cromo.com.br</p>
            </RowImput>
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

        </ContainerContato>
      </ColumContato>


    </>
  );
}
