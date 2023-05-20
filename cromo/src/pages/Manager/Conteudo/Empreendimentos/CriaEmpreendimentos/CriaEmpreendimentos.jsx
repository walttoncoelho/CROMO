import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'
import api from "../../../../../services/api"

let slugify = function (string = "", separator = "-") {
  return string
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9- ]/g, '')
    .replace(/\s+/g, separator);
};

export default function CriaEmpreendimentos() {
  let [opcoes, setOpcoes] = useState(null);
  useEffect(() => {
    async function obterOpcoes() {
      let { data } = await api.get("/manager/empreendimento/create-options", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setOpcoes(data);
    };
    obterOpcoes().catch(error => setOpcoes({
      statusDaConstrucao: [],
      infraestruturas: [],
    }));
  }, []);

  let [infraestruturas, setInfraestruturas] = useState([]);
  let handleInfraestruturaCheck = function (event) {
    let { value, checked } = event.target;
    let updatedInfraestrutura = [...infraestruturas];
    (checked)
      ? updatedInfraestrutura.push(value)
      : updatedInfraestrutura.splice(infraestruturas.indexOf(value), 1)
    setInfraestruturas(updatedInfraestrutura);
  };

  let [statusDaConstrucao, setStatusDaConstrucao] = useState(null);
  let handleStatusDaConstrucaoSelect = function (event) {
    let { value } = event.target;
    setStatusDaConstrucao(value);
  };

  let [status, setStatus] = useState(null);
  let handleStatusCheck = function (event) {
    let { checked } = event.target;
    setStatus(checked);
  };

  let [titulo, setTitulo] = useState(null);
  let handleTituloInput = function (event) {
    let { value } = event.target;
    setTitulo(value);
    setSlug(slugify(value))
  };

  let [descricao, setDescricao] = useState(null);
  let handleDescricaoInput = function (event) {
    let { value } = event.target;
    setDescricao(value);
  };

  let [tipoEmpreendimento, setTipoEmpreendimento] = useState(null);
  let handleTipoEmpreendimentoInput = function (event) {
    let { value } = event.target;
    setTipoEmpreendimento(value);
  };

  let [slug, setSlug] = useState(null);
  let handleSlugInput = function (event) {
    let { value } = event.target;
    setSlug(slugify(value));
  };

  let [lotes, setLotes] = useState(null);
  let handleLotesInput = function (event) {
    let { value } = event.target;
    setLotes(value);
  };

  let [areaLote, setAreaLote] = useState(null);
  let handleAreaLoteInput = function (event) {
    let { value } = event.target;
    setAreaLote(value);
  };

  let [logoEmpreendimento, setLogoEmpreendimento] = useState(null);
  let handleLogoEmpreendimentoUpload = function (event) {
    let { files } = event.target;
    setLogoEmpreendimento(files[0]);
  };

  let [imagemPlantaBaixa, setImagemPlantaBaixa] = useState(null);
  let handleImagemPlantaBaixaUpload = function (event) {
    let { files } = event.target;
    setImagemPlantaBaixa(files[0]);
  };

  let handleSubmit = () => {
    let formIsValid = true;
    if (!formIsValid) {
      return;
    }
    let formData = new FormData();
    formData.append("status", status);
    formData.append("statusDaConstrucao", statusDaConstrucao);
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("tipoEmpreendimento", tipoEmpreendimento);
    formData.append("slug", slug);
    formData.append("lotes", lotes);
    formData.append("areaLote", areaLote);
    formData.append("logoEmpreendimento", logoEmpreendimento);
    formData.append("imagemPlantaBaixa", imagemPlantaBaixa);
    infraestruturas.forEach(infraestrutura => formData.append("infraestruturas[]", infraestrutura));

    api.post("/manager/empreendimentos", formData, {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(_ => window.location.href = "/manager/empreendimentolist")
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
          <div>
            <input onChange={handleStatusCheck} value="false" type="checkbox" id="status" name="status" />
            <label for="status">Em exibição</label>
          </div>

          <label for="titulo">Título do Empreendimento</label>
          <input onChange={handleTituloInput} type="text" id="titulo" name="titulo" />

          <label for="descricao">Descrição</label>
          <textarea onChange={handleDescricaoInput} type="text" id="descricao" name="descricao" />

          <label for="tipoEmpreendimento">Tipo do Empreendimento</label>
          <input onChange={handleTipoEmpreendimentoInput} type="text" id="tipoEmpreendimento" name="tipoEmpreendimento" />

          <label for="slug">Slug</label>
          <input onChange={handleSlugInput} value={slug} type="text" id="slug" name="slug" />

          <label for="lotes">Quantidade de lotes</label>
          <input onChange={handleLotesInput} type="number" min="0" id="lotes" name="lotes" />

          <label for="areaLote">Área de cada lote</label>
          <input onChange={handleAreaLoteInput} type="number" min="0" id="areaLote" name="areaLote" />

          <label for="logoEmpreendimento">Logo</label>
          <input onChange={handleLogoEmpreendimentoUpload} type="file" id="logoEmpreendimento" name="logoEmpreendimento" />

          <label for="imagemPlantaBaixa">Planta baixa</label>
          <input onChange={handleImagemPlantaBaixaUpload} type="file" id="imagemPlantaBaixa" name="imagemPlantaBaixa" />

          <fieldset>
            <legend>Status da Construção</legend>

            {opcoes?.statusDaConstrucao.map(status => (
              <React.Fragment key={status.valor}>
                <input required type="radio" name="statusDaConstrucao" value={status.valor} onChange={handleStatusDaConstrucaoSelect} />
                <label>{status.texto}</label>
              </React.Fragment>
            ))}
          </fieldset>

          <fieldset>
            <legend>Infraestruturas</legend>

            {opcoes?.infraestruturas.map(infraestrutura => (
              <React.Fragment key={infraestrutura.id} >
                <img src={infraestrutura.icone} alt={"Ícone da infraestrutura"} />
                <input required type="checkbox" name="infraestruturas" value={infraestrutura.id} onChange={handleInfraestruturaCheck} />
                <label>{infraestrutura.titulo}</label>
              </React.Fragment>
            ))}
          </fieldset>

          <button type="button" onClick={handleSubmit} disabled={false}>
            Salvar
          </button>
        </form>
      </ContainerStage>
    </Container>
  </>
  )
}
