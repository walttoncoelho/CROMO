import React from "react";
import data from "./data";
import {
  CardContainer,
  CardDescription,
  CardGalery,
  CardImg,
  ContainerLoteButton,
  ContainerStatus
} from "../Style";
import "./styles.css"; // importa o arquivo CSS
import { ButtonSaibaMais } from "../../../components/Bottons/Bottons";

export function CardEmpreend({ empreendimentos }) {
  if (!empreendimentos.length) {
    empreendimentos = data;
  }
  return (
    <>
      <CardContainer>
        <h1>Nossos empreendimentos</h1>
        {empreendimentos.map((empreendimento) => (
          <CardGalery key={empreendimento.id}>
            <CardImg>
              <img src={empreendimento.logoEmpreendimento} alt={empreendimento.altText ?? "Imagem do empreendimento"} />
              <ContainerStatus
                className={empreendimento.statusDaConstrucao === "Obra entregue" ? "orange" : "green"}
              >
                <p>{empreendimento.statusDaConstrucao}</p>
              </ContainerStatus>
            </CardImg>
            <CardDescription>
              <h2>{empreendimento.titulo}</h2>
              <p>{empreendimento.descricao}</p>
              <ContainerLoteButton>
                <br/>
                <p>
                  {" "}
                  <strong>{empreendimento.lotes}</strong> Lote com até{" "}
                  <strong>{empreendimento.areaLote}</strong>
                </p>
                <br/>
                <ButtonSaibaMais>
                  <a
                    href={`empreendimentos/${empreendimento.slug}`}
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Saiba mais
                  </a>
                </ButtonSaibaMais>
              </ContainerLoteButton>
            </CardDescription>
          </CardGalery>
        ))}
      </CardContainer>
    </>
  );
}
