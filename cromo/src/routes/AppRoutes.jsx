import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import FaleConosco from "../pages/FaleConosco/FaleConosco";
import Login from "../pages/Manager/Login/Login";
import Painel from "../pages/Manager/Painel/Painel/Painel";
import Templates from "../pages/Templates/Templates";
import Empreendimentos from "../pages/Empreendimentos/SectionEmpreend";
import EmpreendimentoId from "../pages/EmpreendimentosInterna/EmpreendimentoId";
import Perfil from "../pages/Manager/Painel/Perfil/Perfil";
import Servicos from "../pages/Manager/Painel/Servicos/Servicos";
import Configuracoes from "../pages/Manager/Painel/Configuracoes/Configuracoes";
import Suporte from "../pages/Manager/Painel/Suporte/Suporte";
import ListaBanners from "../pages/Manager/Conteudo/Banner/ListaBanner/ListaBanner";
import CriaBanner from "../pages/Manager/Conteudo/Banner/CriaBanner/CriaBanner";
import CriaEmpreendimentos from "../pages/Manager/Conteudo/Empreendimentos/CriaEmpreendimentos/CriaEmpreendimentos";
import ListaEmpreendimentos from "../pages/Manager/Conteudo/Empreendimentos/ListaEmpreendimentos/ListaEmpreendimentos";
import EmpreendimentoId2 from "../pages/EmpreendimentosInterna/EmpreendimentoId02";
import EditaNumeros from "../pages/Manager/Conteudo/Numeros/EditaNumeros/EditaNumeros";
import CriaInfraestruturas from "../pages/Manager/Conteudo/Infraestruturas/CriaInfraestruturas/CriaInfraestruturas";
import ListaInfraestruturas from "../pages/Manager/Conteudo/Infraestruturas/ListaInfraestruturas/ListaInfraestruturas";

export function AppRoutes() {
  return (
    /* Páginas públicas */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/empreendimentos" element={<Empreendimentos />} />
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/empreendimentoId" element={<EmpreendimentoId />} />
      <Route path="/empreendimentoId2" element={<EmpreendimentoId2 />} />


      {/* Página Login */}
      <Route path="/manager" element={<Login />} />

      {/* Páginas privadas */}
      <Route path="/manager/painel" element={<Painel />} />
      <Route path="/manager/perfil" element={<Perfil />} />
      <Route path="/manager/servicos" element={<Servicos />} />
      <Route path="/manager/Configuracoes" element={<Configuracoes />} />
      <Route path="/manager/Suporte" element={<Suporte />} />


      {/* Conteúdos*/}
      <Route path="/manager/bannerlist" element={<ListaBanners />} />
      <Route path="/manager/bannercreate" element={<CriaBanner />} />
      <Route path="/manager/empreendimentolist" element={<ListaEmpreendimentos />} />
      <Route path="/manager/empreendimentocreate" element={<CriaEmpreendimentos />} />
      <Route path="/manager/infraestruturalist" element={<ListaInfraestruturas />} />
      <Route path="/manager/infraestruturacreate" element={<CriaInfraestruturas />} />
      <Route path="/manager/numeroedit" element={<EditaNumeros />} />

    </Routes>
  );
}
