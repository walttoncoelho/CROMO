import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BannerTopo from './BannerTopo/BannerTopo'
import SobreContent from './SectionSobre/SobreContent'
import BannerFooter from './BannerFooter/BannerFooter'
import BannerSobreMobile from './BannerTopo/BannerSobreMobile'

export default function Sobre() {
  return (
    <>
      <Navbar />
      <BannerTopo />
      <BannerSobreMobile />
      <SobreContent />
      <BannerFooter />
      <Footer />
    </>
  )
}
