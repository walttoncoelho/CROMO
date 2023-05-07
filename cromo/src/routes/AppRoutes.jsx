import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import FaleConosco from "../pages/FaleConosco/FaleConosco";

import Login from "../pages/Manager/Login/Login";
import Painel from "../pages/Manager/Painel/Painel";
import Templates from "../pages/Templates/Templates";
import Empreendimentos from "../pages/Empreendimentos/SectionEmpreend";
import EmpreendimentoId from "../pages/EmpreendimentosInterna/EmpreendimentoId";
import FormularioTeste from "../components/Formulario/FormTest";

export function AppRoutes() {
  return (
    /* Páginas públicas */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/empreendimentos" element={<Empreendimentos/>} />
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/empreendimentoId" element={<EmpreendimentoId/>} />

      <Route path="/form" element={<FormularioTeste/>}/>

      {/* Página Login */}
      <Route path="/manager" element={<Login />} />      

      {/* Páginas privadas */}
      <Route path="/manager/painel" element={<Painel />} />
    </Routes>
  );
}
