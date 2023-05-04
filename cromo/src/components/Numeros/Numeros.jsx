import React, { useState, useEffect } from "react";
import numeros from "../../../src/data/componentNumeros/numeros";
import { BlocoNumbers, ContainerNumeros, StyleNumbers } from "./Style";

export default function Numeros() {
  const [valoresAtuais, setValoresAtuais] = useState([]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setValoresAtuais((valoresAtuaisAnteriores) =>
        valoresAtuaisAnteriores.map((item) => ({
          ...item,
          valorAtual: item.valorAtual + Math.floor(Math.random() * 10) + 1,
        }))
      );
    }, 3500);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    // Define os valores iniciais dos números
    setValoresAtuais(
      numeros.map((item) => ({ ...item, valorAtual: item.valorInicial }))
    );
  }, []);

  return (
    <>
      <ContainerNumeros>
        {valoresAtuais.map((item) => (
          <BlocoNumbers key={item.id}>
            <StyleNumbers>
              <h1>{item.valorAtual}</h1>
              <p>{item.texto}</p>
            </StyleNumbers>
          </BlocoNumbers>
        ))}
      </ContainerNumeros>
    </>
  );
}
