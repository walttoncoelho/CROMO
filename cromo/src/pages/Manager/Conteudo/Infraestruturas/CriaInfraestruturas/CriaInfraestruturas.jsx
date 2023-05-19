import React, { useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'
import api from "../../../../../services/api"


export default function CriaInfraestruturas() {
  let [titulo, setTitulo] = useState(null);
  let handleTituloInput = function (event) {
    let { value } = event.target;
    setTitulo(value);
  };

  let [icone, setIcone] = useState(null);
  let handleIconeUpload = function (event) {
    let { files } = event.target;
    setIcone(files[0]);
  };

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("icone", icone);

    api.post("/manager/infraestruturas", formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(_ => window.location.href = "/manager/infraestruturalist")
    .catch(console.error);
  }
  return (
    <>
    <NavBar />
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
        <form style={{display: "flex", flexDirection: "column"}}>
          <label for="titulo">Título da Infraestrutura</label>
          <input onChange={handleTituloInput} type="text" id="titulo" name="titulo" />

          <label for="icone">Ícone</label>
          <input onChange={handleIconeUpload} type="file" id="icone" name="icone" />

          <button type="button" onClick={handleSubmit} disabled={false}>
            Salvar
          </button>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
