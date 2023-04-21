import React from "react";
import numeros from "../../../src/data/componentNumeros/numeros";
import {  BlocoNumbers, ContainerNumeros, StyleNumbers } from "./Style";

export default function Numeros() {
  return (
    <>
    <ContainerNumeros>

      {numeros.map((item) => (
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
