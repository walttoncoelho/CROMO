import React from "react";
import { ContainerEmpreend, ContainerVermais } from "./Style";
import { CardEmpreend } from "./data/galery";
import { ButtonVerMais } from "../../../components/Bottons/Bottons";

export default function SectionEmpreend() {
  return (
    <>
      <ContainerEmpreend>
        <CardEmpreend />
      </ContainerEmpreend>
      <ContainerVermais>
        <ButtonVerMais>
          <p>
            <a href="/empreendimentos">Ver mais</a>
          </p>
        </ButtonVerMais>
      </ContainerVermais>
    </>
  );
}
