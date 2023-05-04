import React from "react";

import NumerosBloco from "../../../components/Numeros/NumerosBloco";
import BigNumeros from "./BigNumeros";
import { BlocoDesc, BlocoNumbers, ContainerNumeros } from "./Style";



export default function Numeros() {


  return (
    <>
    <ContainerNumeros>
      <BlocoDesc>

    <BigNumeros/>
      </BlocoDesc>
      <BlocoNumbers>
    <NumerosBloco />
      </BlocoNumbers>
    </ContainerNumeros>
    </>
  );
}
