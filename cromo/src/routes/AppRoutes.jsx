import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import FaleConosco from "../pages/FaleConosco/FaleConosco";
import Empreendimentos from "../pages/Empreendimentos/Empreendimentos";
import Login from "../pages/Manager/Login/Login";
import Painel from "../pages/Manager/Painel/Painel";
import Templates from "../pages/Templates/Templates";

export function AppRoutes() {
  return (
    /* Páginas públicas */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/empreendimentos" element={<Empreendimentos />} />
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/manager" element={<Login />} />

      <Route path="/templates" element={<Templates />} />

      {/* Páginas auxiliares */}

      {/* Páginas privadas */}

      <Route path="/painel" element={<Painel />} />
    </Routes>
  );
}
