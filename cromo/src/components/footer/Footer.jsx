import React from "react";
import {
  BarraButtonFooter,
  ByGoodApp,
  Colum,
  Container,
  Grid1,
  Grid2,
  IconSocial
} from "./style";
import Formulario from "../Formulario/Formulário";
import Whats from "../ButtonWhats/ButtonWhats";
import Instagram from "./img/instagram.svg";
import Facebook from "./img/facebook.svg";

/* import logoImg from "../../assets/logo/logo.png"; */
/* import instagram from "../../assets/instagram.svg"; */

export default function Footer() {
  return (
    <>
      <Container>
        <Colum>
          <Grid1>        
            <h2>Fale conosco</h2>
            <p>
              Deseja receber contato para conhecer melhor nossas ofertas
              comerciais e novidades? Preencha nosso formulário.
            </p>
           
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
           
          </Grid1>
          <Grid2>
            <>
              <Formulario />
            </>
          </Grid2>
        </Colum>
        <ByGoodApp>
          <p>
            ©2023 Cromo Construtora e Incorporadora | Todos os direitos
            reservados{" "}
            <a
              href="https://www.goodapp.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >              
            </a>
          </p>
        </ByGoodApp>
        <BarraButtonFooter>
          <Whats />
        </BarraButtonFooter>
      </Container>
    </>
  );
}
