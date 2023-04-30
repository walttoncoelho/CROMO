import React from "react";

import Title from "../BannerSecundario/img/TituloBanner.png";
import Banner from "../BannerSecundario/img/BannerFamilia.png";
import { BannerMobile, BannerTitle, ContainerBannerMobile } from "./Style";

export default function BannerSecundarioMobile() {
  return (
    <>
      <ContainerBannerMobile>
        <BannerTitle>
          <img src={Title} alt="title" />
        </BannerTitle>
        <BannerMobile>
          <img src={Banner} alt="Banner" />
        </BannerMobile>
      </ContainerBannerMobile>
    </>
  );
}
