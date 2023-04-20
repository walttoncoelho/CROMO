import React from "react";
import { ContainerEmpreend } from "./Style";
import { CardEmpreend } from "./data/galery";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SectionNumeros from "../Home/SectionNumeros/SectionNumeros";

export default function Empreendimentos() {
  return (
    <>
    <Navbar/>
      <ContainerEmpreend>
        <CardEmpreend />
      </ContainerEmpreend>
      <SectionNumeros/>
      <Footer />

    </>
  );
}
