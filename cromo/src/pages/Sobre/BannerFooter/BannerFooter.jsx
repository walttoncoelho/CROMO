import React from 'react'
import bannerFooter from "./img/bannerFundo.png";
import { ContainerBanner } from './Style';

export default function BannerFooter() {
  return (
    <div>
        <ContainerBanner>


        <img src={bannerFooter} alt="Instagram" />
      
        </ContainerBanner>
    </div>
  )
}
