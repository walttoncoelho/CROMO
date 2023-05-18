import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import AdministrativePanel from '../../../components/AdministrativePanel/AdministrativePanel'
import { Container, ContainerSidebar, ContainerStage } from './Style/Style'
import api from "../../../../../services/api"


export default function CriaEmpreendimentos() {
  let [opcoes, setOpcoes] = useState(null);

  let [infraestruturas, setInfraestruturas] = useState([]);
  let handleInfraestruturaCheck = function (event) {
    let { value, checked } = event.target;
    let updatedInfraestrutura = [...infraestruturas];
    (checked)
      ? updatedInfraestrutura.push(value)
      : updatedInfraestrutura.splice(infraestruturas.indexOf(value), 1)
    setInfraestruturas(updatedInfraestrutura);
  };

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
  let handleSubmit = () => console.log(infraestruturas)
  return (
    <>
    <NavBar />
    <Container>
      <ContainerSidebar>
        <AdministrativePanel />
      </ContainerSidebar>
      <ContainerStage>
        <form>
          <label for="status">Em exibição</label>
          <input value="false" type="checkbox" id="status" name="status" />

          <fieldset>
            <legend>Status da Construção</legend>

            {opcoes?.statusDaConstrucao.map(status => (
              <React.Fragment key={status.valor}>
                <input type="radio" name="statusDaConstrucao" value={status.valor} />
                <label>{status.texto}</label>
              </React.Fragment>
            ))}
          </fieldset>

          <fieldset>
            <legend>Infraestruturas</legend>

            {opcoes?.infraestruturas.map(infraestrutura => (
              <React.Fragment key={infraestrutura.id} >
                <img src={`http://localhost:3000/infraestruturas/${infraestrutura.id}/icone`} />
                <input type="checkbox" name="infraestruturas" value={infraestrutura.id} onChange={handleInfraestruturaCheck} />
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
