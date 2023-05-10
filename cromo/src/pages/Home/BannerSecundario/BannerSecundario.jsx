import React from 'react'
import data from "./data/data";
import { ContainerBanner } from './Style';

export default function BannerSecundario() {
  return (
    <>
      <ContainerBanner>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.linkUrl} />
          </div>
        ))}
      </ContainerBanner>

    </>
  )
}