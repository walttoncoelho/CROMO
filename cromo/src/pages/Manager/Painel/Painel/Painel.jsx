import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AdministrativePanel from '../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from './Style'
import Cards from '../../components/Cards/Cards'


export default function Painel() {
  return (
    <>
      <NavBar />
      <Container>
        <ContainerSidebar>
          <AdministrativePanel />
        </ContainerSidebar>
        <ContainerStage>
          <br />
          <h3>Painel - Estatísticas</h3>
          <br />
          <hr />
          <br />
          <Cards />
        </ContainerStage>
      </Container>
    </>
  )
}
