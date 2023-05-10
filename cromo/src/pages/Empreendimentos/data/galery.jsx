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

export function CardEmpreend() {
  return (
    <>
      <CardContainer>
        <h1>Nossos empreendimentos</h1>
        {data.map((item) => (
          <CardGalery key={item.id}>
            <CardImg>
              <img src={item.imageUrl} alt={item.linkUrl} />
              <ContainerStatus
                className={item.status === "Obra entregue" ? "orange" : "green"}
              >
                <p>{item.status}</p>
              </ContainerStatus>
            </CardImg>
            <CardDescription>
              <h2>{item.title}</h2>
              <p>{item.sobre}</p>
              <ContainerLoteButton>
                <br/>
                <p>
                  {" "}
                  <strong>{item.loteInicio}</strong> Lote com até{" "}
                  <strong>{item.loteFim}</strong>
                </p>
                <br/>
                <ButtonSaibaMais>
                  <a
                    href={item.linkConhecer}
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
