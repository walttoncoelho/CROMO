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

export function CardEmpreend() {
  return (
    <>
      <CardContainer>
        {data.map((item) => (
          <CardGalery key={item.id}>
            <img src={item.imageUrl} alt={item.linkUrl} />
            <ContainerStatus
              className={
                item.status === "Obra entregue" ? "orange" : "green"
              }
            >
              <p>{item.status}</p>
            </ContainerStatus>
            <CardDescription>
              <h3>{item.title}</h3>
              <h4>{item.descricao}</h4>
              <a
                href={item.linkConhecer}                
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
