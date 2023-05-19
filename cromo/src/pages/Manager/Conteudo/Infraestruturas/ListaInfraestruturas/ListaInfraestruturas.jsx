import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import CardListInfraestrutura from '../../../components/CardListInfraestrutura/CardListInfraestrutura'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'
import api from "../../../../../services/api";


export default function ListaInfraestruturas() {
  let [infraestruturas, setInfraestruturas] = useState(null);

  useEffect(() => {
    async function obterInfraestruturas() {
      let { data } = await api.get("/manager/infraestruturas", {
        headers: { "Authorization": `Bearer ${ localStorage.getItem("token") }` }
      });
      setInfraestruturas(data);
    };
    obterInfraestruturas().catch(error => setInfraestruturas([]));
  }, []);
  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
        {infraestruturas && <CardListInfraestrutura dados={infraestruturas} />}
      </ContainerStage>
    </Container>
    </>
  )
}
