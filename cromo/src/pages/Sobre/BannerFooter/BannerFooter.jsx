import React from 'react'
import bannerFooter from "./img/bannerFundo.png";
import { ContainerBanner } from './Style';
import bannerFooterMobile from "./img/BannerFundoMobile.png";


export default function BannerFooter() {
  return (
    <>
        <ContainerBanner>
    <div className='BannerDesktop'>
        <img src={bannerFooter} alt="Instagram" />      
    </div>

    <div className='BannerMobile'>
        <img src={bannerFooterMobile} alt="Instagram" />      
    </div>
        </ContainerBanner>
    </>
  )
}
