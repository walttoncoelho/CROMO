import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import CardListEmpreendimento from '../../../components/CardListEmpreendimento/CardListEmpreendimento'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'
import api from "../../../../../services/api";


export default function ListaEmpreendimentos() {
  let [empreendimentos, setEmpreendimentos] = useState(null);

  useEffect(() => {
    async function obterEmpreendimentos() {
      let { data: empreendimentos } = await api.get("/manager/empreendimentos", {
        headers: { "Authorization": `Bearer ${ localStorage.getItem("token") }` }
      });
      setEmpreendimentos(empreendimentos);
    };
    obterEmpreendimentos().catch(error => setEmpreendimentos([]));
  }, []);
  return (
    <>
    <NavBar />
    
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
        {empreendimentos && <CardListEmpreendimento dados={empreendimentos} />}
      </ContainerStage>
    </Container>
    </>
  )
}
