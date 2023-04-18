import React from "react";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Galeria from "./Galeria/Galeria";
import ButtonContact from "../../components/ButtonWhats/ButtonContact";

export default function Home() {
  return (
    <>
      <Navbar />
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
