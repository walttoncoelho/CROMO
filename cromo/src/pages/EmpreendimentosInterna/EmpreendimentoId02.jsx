/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  SectionDescription,
  ContainerHeader,
  ContainerIcons,
  ContainerPlanta,
  SectionMap
} from "./Style";
import empreendimentos from "../../data/Empreendimentos/empreendimentos2";
import {
  ContainerSobre,
  SobreStyleText,
  ContainerDescription,
  SectionGalery
} from "./Style";
import ButtonContact from "../../components/ButtonContact/ButtonContact";

export default function EmpreendimentoId2() {
  const data = empreendimentos;
  return (
    <>
      <Navbar />
      <ContainerHeader>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.logo} alt={item.linkUrl} />
          </div>
        ))}
      </ContainerHeader>
      <SectionDescription>
        <ContainerPlanta>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.plantaBaixa} alt={item.linkUrl} />
            </div>
          ))}
        </ContainerPlanta>

        <ContainerDescription>
          <ContainerSobre>
            <SobreStyleText>
              {data.map((item) => (
                <div key={item.id}>
                  <h2>{item.titulo}</h2>
                  <p>{item.descricao}</p>
                  <br />
                  <p className="numeros">
                    <strong>{item.loteInicio}</strong> lotes com até{" "}
                    <strong>{item.loteFim}</strong>
                  </p>
                </div>
              ))}
            </SobreStyleText>
          </ContainerSobre>

          {data.map((item) => (
            <ContainerIcons>
              {item.infra.map((imagem) => (
                <div className="styleIcons" key={imagem.url}>
                  <img src={imagem.url} alt={imagem.legenda} />
                  <p>{imagem.nome}</p>
                </div>
              ))}
            </ContainerIcons>
          ))}
        </ContainerDescription>
      </SectionDescription>

      {data.map((item) => (
        <SectionGalery key={item.id}>
          {item.galeria.map((imagem) => (
            <div key={imagem.url}>
              <img src={imagem.url} alt={imagem.legenda} />
            </div>
          ))}
        </SectionGalery>
      ))}
      <SectionMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31644.068235954972!2d-46.07003674072497!3d-7.519376272806751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d5ef9625fb9fa5%3A0x697ed5cde68bbfe7!2sBalsas%2C%20MA%2C%2065800-000!5e0!3m2!1spt-BR!2sbr!4v1683667879451!5m2!1spt-BR!2sbr"

        ></iframe>
      </SectionMap>

      <ButtonContact />
      <Footer />
    </>
  );
}
