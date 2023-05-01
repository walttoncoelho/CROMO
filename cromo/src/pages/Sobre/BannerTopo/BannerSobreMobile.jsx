import React from "react";
import Banner from "./img/BannerSobreMobile.png";
import { BannerMobile, ContainerBannerMobile } from "./Style";

export default function BannerSobreMobile() {
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
