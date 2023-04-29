import React from "react";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/Navbar/Navbar";

import ButtonContact from "../../components/ButtonContact/ButtonContact";
import { ContainerBanner } from "./Banner/Style";
import SectionEmpreend from "./Empreendimentos/SectionEmpreend";

import BannerPrincipal from "./Banner/BannerPrincipal";
import BannerSecundario from "./BannerSecundario/BannerSecundario";
import SectionNumeros from "./SectionNumeros/SectionNumeros";

export default function Home() {
  return (
    <>    
      <Navbar />
      <ContainerBanner>
        <BannerPrincipal />
      </ContainerBanner>
      <SectionEmpreend />
      <BannerSecundario />
      <SectionNumeros />
      <ButtonContact />     
      <Footer />
    </>
    
  );
}
