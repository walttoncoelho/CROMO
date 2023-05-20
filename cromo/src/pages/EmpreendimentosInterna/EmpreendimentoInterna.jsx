/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
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
import { useParams } from 'react-router-dom';
import api from "../../services/api";

export default function EmpreendimentoInterna() {
  let { empreendimentoSlug } = useParams();
  let [empreendimento, setEmpreendimento] = useState(null);

  useEffect(() => {
    async function obterEmpreendimento() {
      let { data } = await api.get(`/empreendimentos/${empreendimentoSlug}`);
      setEmpreendimento(data);
    };
    obterEmpreendimento().catch(error => setEmpreendimento(
      empreendimentos.find(empreendimento => empreendimento.slug === empreendimentoSlug)
    ));
  }, [empreendimentoSlug]);
  return empreendimento && (
    <>
      <Navbar />
      <ContainerHeader>
        <div>
          <img src={empreendimento.logoEmpreendimento} alt={"Logo"} />
        </div>
      </ContainerHeader>
      <SectionDescription>
        <ContainerPlanta>
          <div>
            <img src={empreendimento.imagemPlantaBaixa} alt={"Planta Baixa"} />
          </div>
        </ContainerPlanta>

        <ContainerDescription>
          <ContainerSobre>
            <SobreStyleText>
              <div>
                <h2>{empreendimento.titulo}</h2>
                <p>{empreendimento.descricao}</p>
                <br />
                <p className="numeros">
                  <strong>{empreendimento.lotes}</strong> lotes com até{" "}
                  <strong>{empreendimento.areaLote}</strong>
                </p>
              </div>
            </SobreStyleText>
          </ContainerSobre>

          <ContainerIcons>
            {empreendimento.infraestrutura.map(item => (
              <div className="styleIcons" key={item.icone}>
                <img src={item.icone} alt={item.titulo} />
                <p>{item.titulo}</p>
              </div>
            ))}
          </ContainerIcons>
        </ContainerDescription>
      </SectionDescription>

      <SectionGalery>
        {empreendimento.galeria.map(item => (
          <div key={item.imagem}>
            <img src={item.imagem} alt={item.legenda ?? "Imagem da galeria"} />
          </div>
        ))}
      </SectionGalery>
      <SectionMap>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1KIoSD0CPfXDs611VV2PNC9zyMastOYY&ehbc=2E312F" ></iframe>
      </SectionMap>

      <ButtonContact />
      <Footer />
    </>
  );
}
