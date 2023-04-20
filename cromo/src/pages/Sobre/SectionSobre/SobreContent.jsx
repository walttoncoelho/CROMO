import React from "react";
import data from "../../../data/pageSobre/sobre";

import controleQualidade from "../../../data/pageSobre/controleQualidade";
import {
  ContainerNumerero,
  ContainerNumererosQualidade,
  ContainerQualidade,
  ContainerSobre
} from "./Style.jsx";
import Numeros from "../../../components/Numeros/Numeros";

export default function SobreContent() {
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
          {/* Componente Números */}
          <Numeros />
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
