import React from "react";
import data from "./data";
import {
  CardContainer,
  CardDescription,
  CardGalery,
  ContainerStatus
} from "../Style";
import Arrow from "./img/arrow.svg";
import "./styles.css"; // importa o arquivo CSS

export function CardEmpreend({ empreendimentos }) {
  if (!empreendimentos.length) {
    empreendimentos = data;
  }
  return (
    <>
      <CardContainer>
        {empreendimentos.map((empreendimento) => (
          <CardGalery key={empreendimento.id}>
            <img src={empreendimento.logoEmpreendimento} alt={empreendimento.altText ?? "Imagem do empreendimento"} />
            <ContainerStatus
              className={
                empreendimento.statusDaConstrucao === "Obra entregue" ? "orange" : "green"
              }
            >
              <p>{empreendimento.statusDaConstrucao}</p>
            </ContainerStatus>
            <CardDescription>
              <h3>{empreendimento.titulo}</h3>
              <h4>{empreendimento.tipoEmpreendimento}</h4>
              <a
                href={`${empreendimento.slug}`}                
                rel="noopener noreferrer"
              >
                {" "}
                Conhecer
                <img src={Arrow} alt="Arrow" />
              </a>
            </CardDescription>
          </CardGalery>
        ))}
      </CardContainer>
    </>
  );
}
