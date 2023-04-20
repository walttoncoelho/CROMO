import React from "react";
import data from "./data/data";
import { BlocoDesc, BlocoNumbers, ContainerNumeros, StyleNumbers } from "./Style";

export default function SectionNumeros() {
  return (
    <>
      <ContainerNumeros>
        <BlocoDesc>
          {data.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.descricao}</p>
            </div>
          ))}
        </BlocoDesc>

        <BlocoNumbers>
          {data.map((item) => (
            <div key={item.id}>
              <StyleNumbers>
              <h2>{item.lotes}</h2>
              <p>lotes vendidos</p>
              </StyleNumbers>
              <StyleNumbers>
              <h2>{item.asfalto}</h2>
              <p>de asfalto</p>
              </StyleNumbers>
              <StyleNumbers>
              <h2>{item.rua}</h2>
              <p>Opções de ruas</p>
              </StyleNumbers>
              <StyleNumbers>
              <h2>{item.familias}</h2>
              <p>Famílias instaladas</p>
              </StyleNumbers>
            </div>
          ))}
        </BlocoNumbers>
      </ContainerNumeros>
    </>
  );
}
