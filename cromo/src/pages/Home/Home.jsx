import React from "react";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Galeria from "./Galeria/Galeria";
import ButtonContact from "../../components/ButtonContact/ButtonContact";
import { ContainerBanner } from "./Banner/Style";
import SectionEmpreend from "./Empreendimentos/SectionEmpreend";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContainerBanner></ContainerBanner>
      <SectionEmpreend></SectionEmpreend>
      <ButtonContact/>
      
      <>
      
        {" "}
        <Banner />
        <Galeria />
        <div>Home</div>
      </>

      <Footer />
    </>
  );
}
