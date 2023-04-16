import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  ByGoodApp,
  Colum,
  Container,
  Grid1,
  Grid2,
  Grid4
} from "./style";
import Formulario from "../Formulario/Formulário";

/* import logoImg from "../../assets/logo/logo.png"; */
/* import instagram from "../../assets/instagram.svg"; */

export default function Footer() {
  
  return (
    <>
      <Container>
        <Colum>
          <Grid1>
           {/*  <img src={logoImg} alt="Logo" /> */}
      
           <h2>
            Fale conosco
           </h2>
           <p>
            Deseja receber contato para conhecer melhor nossas ofertas
            comerciais e novidades? Preencha nosso formulário.
           </p>
                     <Grid4>
            <a
              href="##"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src={instagram} alt="Instagram" /> */}

              <FaInstagram />
            </a>

            <a
              href="##"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </Grid4>
          </Grid1>
          <Grid2>
            <>

            <Formulario/>
 

            </>
          </Grid2>
         

        </Colum>
        <ByGoodApp>
         
          <p>
            ©2023 Cromo Construtora e Incorporadora | Todos os direitos reservados{" "}
            <a
              href="https://www.goodapp.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >

            </a>
          </p>
        </ByGoodApp>
      </Container>
    </>
  );
}
