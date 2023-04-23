import React from 'react'
import data from "./data/data";
import { ContainerBanner } from './Style';
import BtnExplorar from './ButtonExplorar/BtnExplorar';

export default function BannerPrincipal() {
  return (
   <>
   <ContainerBanner>
     <BtnExplorar/>

   {data.map((item) => (
       <div key={item.id}>
        <img src={item.imageUrl} alt={item.linkUrl} />
    </div>
   ))}
   </ContainerBanner>
   
   </>
  )
}
