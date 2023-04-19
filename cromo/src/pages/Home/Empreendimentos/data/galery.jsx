import React from "react";
import data from "./data";
import { CardContainer, CardDescription, CardGalery } from "../Style";
import Arrow from "./img/arrow.svg";

export function CardEmpreend() {
  return (
    <>
      <CardContainer>
        {data.map((item) => (
          <CardGalery key={item.id}>
            <img src={item.imageUrl} alt={item.linkUrl} />
            <CardDescription>
              <h3>{item.title}</h3>
              <h4>{item.descricao}</h4>
              <a
                href="https://www.instagram.com/jcambiental/"
                target="_blank"
                rel="noopener noreferrer"
              > Conhecer
                <img src={Arrow} alt="Arrow" />
              </a>

            </CardDescription>
          </CardGalery>
        ))}
      </CardContainer>
    </>
  );
}
