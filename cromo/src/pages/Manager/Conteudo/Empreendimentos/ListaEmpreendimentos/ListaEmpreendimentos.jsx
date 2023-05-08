import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import CardListing from '../../../components/CardListing/CardListing'
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
        <CardListing />
      </ContainerStage>
    </Container>
  </>
  )
}
