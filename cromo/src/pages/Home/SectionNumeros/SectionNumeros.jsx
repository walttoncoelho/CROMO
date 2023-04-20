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

    
          {data.map((item) => (
            <BlocoNumbers key={item.id}>
              <StyleNumbers>
              <h1>{item.lotes}</h1>
              <p>lotes vendidos</p>
              </StyleNumbers>
              <StyleNumbers>
              <h1>{item.asfalto}</h1>
              <p>de asfalto</p>
              </StyleNumbers>
              <StyleNumbers>
              <h1>{item.rua}</h1>
              <p>Opções de ruas</p>
              </StyleNumbers>
              <StyleNumbers>
              <h1>{item.familias}</h1>
              <p>Famílias instaladas</p>
              </StyleNumbers>
            </BlocoNumbers>
          ))}
       
      </ContainerNumeros>
    </>
  );
}
