import React from "react";
import { Container, ContainerLogo, ContainerSair, ContainerSitePerfil, ContainerSitePreview } from "./Style";
import logo from "./image/logo.png";

export default function NavbarManager() {
  return (
    <>
      <Container>
        <ContainerLogo>
          <img src={logo} alt="Logo" />
        </ContainerLogo>
        <ContainerSitePreview>
        <button>Ir para o Site</button>
        </ContainerSitePreview>
        <ContainerSitePerfil>
        <p>
          Olá <strong>Nome do usuário</strong>
        </p>
        </ContainerSitePerfil>
        <ContainerSair>
        <button>Sair</button>
        </ContainerSair>
      </Container>
    </>
  );
}
