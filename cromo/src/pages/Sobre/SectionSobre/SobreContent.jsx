import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import data from "../../../data/pageSobre/sobre";
import numeros from "../../../data/componentNumeros/numeros";
import NumerosBloco from "../../../components/Numeros/NumerosBloco";

import controleQualidade from "../../../data/pageSobre/controleQualidade";
import {
  ContainerNumerero,
  ContainerNumererosQualidade,
  ContainerQualidade,
  ContainerSobre
} from "./Style.jsx";

export default function SobreContent() {
  let [numerosIniciais, setNumerosIniciais] = useState(null);

  useEffect(() => {
    async function obterNumerosIniciais() {
      let { data: numeros } = await api.get("/numeros");
      setNumerosIniciais(numeros);
    };
    obterNumerosIniciais().catch(error => setNumerosIniciais(numeros));
  }, []);

  return (
    <>
      <ContainerSobre>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.descricao}</p>
          </div>
        ))}
      </ContainerSobre>
      <ContainerNumererosQualidade>
        <ContainerNumerero>
          {numerosIniciais && <NumerosBloco numerosIniciais={numerosIniciais} />}
        </ContainerNumerero>
        <ContainerQualidade>
          {controleQualidade.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.descricao}</p>
            </div>
          ))}
        </ContainerQualidade>
      </ContainerNumererosQualidade>
    </>
  );
}
