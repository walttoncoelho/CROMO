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
import logoImg from "../../assets/logo/logo.png";
/* import instagram from "../../assets/instagram.svg"; */

export default function Footer() {
  return (
    <>
      <Container>
        <Colum>
          <Grid1>
            <img src={logoImg} alt="Logo" />
          </Grid1>
          <Grid2>
            <>
              <ul>
                <li>
                  <a href="home">HOME</a>
                </li>
                <li>
                  <a href="sobre">SOBRE</a>
                </li>
                <li>
                  <a href="servicos">EMPREENDIMENTOS</a>
                </li>

                <li>
                  <a href="contato">FALE CONOSCO</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="listavip">TRABALHE CONOSCO</a>
                </li>      
              </ul>
            </>
          </Grid2>
         
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
        </Colum>
        <ByGoodApp>
          <p>
            @cromo 2023 Todos os direitos reservados{" "}
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
