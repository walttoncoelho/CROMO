import React, { useEffect, useState } from "react";
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'
import api from "../../../../../services/api";
import { Popup } from "../../../../../components/footerFaleConosco/Formulario/Style";


export default function EditaNumeros() {
  let [titulo, setTitulo] = useState(null);
  let [descricao, setDescricao] = useState(null);
  let [lotes, setLotes] = useState(null);
  let [asfalto, setAsfalto] = useState(null);
  let [rua, setRua] = useState(null);
  let [familias, setFamilias] = useState(null);

  let handleTituloChange = (event) => setTitulo(event.target.value)
  let handleDescricaoChange = (event) => setDescricao(event.target.value);
  let handleLotesChange = (event) => setLotes(Number.parseInt(event.target.value));
  let handleAsfaltoChange = (event) => setAsfalto(Number.parseInt(event.target.value));
  let handleRuaChange = (event) => setRua(Number.parseInt(event.target.value));
  let handleFamiliasChange = (event) => setFamilias(Number.parseInt(event.target.value));

  useEffect(() => {
    async function obterNumeros() {
      let { data } = await api.get("/manager/numeros", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setTitulo(data.titulo)
      setDescricao(data.descricao)
      setLotes(data.lotes)
      setAsfalto(data.asfalto)
      setRua(data.rua)
      setFamilias(data.familias)
    };
    obterNumeros().catch(error => {
      setTitulo("")
      setDescricao("")
      setLotes(0)
      setAsfalto(0)
      setRua(0)
      setFamilias(0)
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titulo === "" || descricao === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    let numeros = { titulo, descricao, lotes, asfalto, rua, familias };
    try {
      await api.patch('/manager/numeros', numeros, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      setStatusMessage("Números atualizados com sucesso!");
    } catch (error) {
      setError("Houve algum erro na atualização dos números.");
    }
  };

  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <>
    <NavBar />
    <Container>
      {statusMessage && (
        <Popup className="show">
          <p>SUCESSO!</p>
          {statusMessage}
          <button onClick={() => { setStatusMessage(""); setError(""); }}>
            Fechar
          </button>
        </Popup>
      )}
      {error && (
        <Popup className="show">
          <p>X</p>
          {error}
          <button onClick={() => { setStatusMessage(""); setError(""); }}>
            Fechar
          </button>
        </Popup>
      )}
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
        <form>
          <label for="titulo">Título</label>
          <input value={titulo} onChange={handleTituloChange} type="text" id="titulo" name="titulo" />

          <label for="descricao">Descrição</label>
          <textarea value={descricao} onChange={handleDescricaoChange} id="descricao" name="descricao" />

          <label for="lotes">Lotes vendidos</label>
          <input value={lotes} onChange={handleLotesChange} type="number" id="lotes" name="lotes" />

          <label for="asfalto">Km Asfaltados</label>
          <input value={asfalto} onChange={handleAsfaltoChange} type="number" id="asfalto" name="asfalto" />

          <label for="rua">Opções de rua</label>
          <input value={rua} onChange={handleRuaChange} type="number" id="rua" name="rua" />

          <label for="familias">Famílias instaladas</label>
          <input value={familias} onChange={handleFamiliasChange} type="number" id="familias" name="familias" />

          <button type="button" onClick={handleSubmit} disabled={ false }>
            Salvar
          </button> 
        </form>
    
      </ContainerStage>
    </Container>
  </>
  )
}
