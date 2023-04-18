import React from "react";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Galeria from "./Galeria/Galeria";
import ButtonContact from "../../components/ButtonWhats/ButtonContact";
import { ContainerBanner } from "./Banner/Style";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContainerBanner></ContainerBanner>
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
