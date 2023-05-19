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
import empreendimentos from "../../data/Empreendimentos/empreendimentos";
import {
  ContainerSobre,
  SobreStyleText,
  ContainerDescription,
  SectionGalery
} from "./Style";
import ButtonContact from "../../components/ButtonContact/ButtonContact";

export default function EmpreendimentoId() {
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
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1KIoSD0CPfXDs611VV2PNC9zyMastOYY&ehbc=2E312F" ></iframe>
      </SectionMap>

      <ButtonContact />
      <Footer />
    </>
  );
}
