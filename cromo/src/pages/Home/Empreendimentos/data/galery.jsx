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
  return (
    <>
      <CardContainer>
        {empreendimentos.map((empreendimento) => (
          <CardGalery key={empreendimento.id}>
            <img src={`http://localhost:3000/empreendimentos/${empreendimento.id}/imagem/${empreendimento.logoEmpreendimento}`} />
            <ContainerStatus
              className={
                empreendimento.statusDaObra === "Obra entregue" ? "orange" : "green"
              }
            >
              <p>{empreendimento.statusDaObra}</p>
            </ContainerStatus>
            <CardDescription>
              <h3>{empreendimento.titulo}</h3>
              <h4>{empreendimento.descricao}</h4>
              <a
                href={`empreendimentoId/${empreendimento.slug}`}                
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
