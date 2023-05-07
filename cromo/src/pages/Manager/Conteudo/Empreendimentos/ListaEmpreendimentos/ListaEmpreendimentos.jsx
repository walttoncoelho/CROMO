import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'


export default function ListaEmpreendimentos() {
  return (
    <>
    <NavBar />
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
        <br />
        <h3>Painel - Conteúdo - Listagem de Empreendimentos</h3>
        <br />
        <hr />
        <br />
    
      </ContainerStage>
    </Container>
  </>
  )
}
