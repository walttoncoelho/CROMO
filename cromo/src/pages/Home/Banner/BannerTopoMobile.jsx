import React from "react";
import Banner from "./img/BannerMobile.png";
import { BannerMobile, ContainerBannerMobile } from "./Style";

export default function BannerTopoMobile() {
  return (
    <>
      <ContainerBannerMobile>
        <BannerMobile>
          <img src={Banner} alt="Banner" />
        </BannerMobile>
      </ContainerBannerMobile>
    </>
  );
}
