import React, { useEffect, useState } from "react";

import numeros from "../../../data/componentNumeros/numeros";
import NumerosBloco from "../../../components/Numeros/NumerosBloco";
import BigNumeros from "./BigNumeros";
import { BlocoDesc, BlocoNumbers, ContainerNumeros } from "./Style";

import api from "../../../services/api";

export default function Numeros() {
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
      <ContainerNumeros>
        <BlocoDesc>
          { numerosIniciais && <BigNumeros detalhes={ numerosIniciais } />}
        </BlocoDesc>
        <BlocoNumbers>
          { numerosIniciais && <NumerosBloco numerosIniciais={ numerosIniciais } />}
        </BlocoNumbers>
      </ContainerNumeros>
    </>
  );
}
