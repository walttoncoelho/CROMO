import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sobre from "../pages/Sobre/Sobre";
import FaleConosco from "../pages/FaleConosco/FaleConosco";
import Login from "../pages/Manager/Login/Login";
import Painel from "../pages/Manager/Painel/Painel/Painel";
import Templates from "../pages/Templates/Templates";
import Empreendimentos from "../pages/Empreendimentos/SectionEmpreend";
import Perfil from "../pages/Manager/Painel/Perfil/Perfil";
import Servicos from "../pages/Manager/Painel/Servicos/Servicos";
import Configuracoes from "../pages/Manager/Painel/Configuracoes/Configuracoes";
import Suporte from "../pages/Manager/Painel/Suporte/Suporte";
import ListaBanners from "../pages/Manager/Conteudo/Banner/ListaBanner/ListaBanner";
import CriaBanner from "../pages/Manager/Conteudo/Banner/CriaBanner/CriaBanner";
import CriaEmpreendimentos from "../pages/Manager/Conteudo/Empreendimentos/CriaEmpreendimentos/CriaEmpreendimentos";
import ListaEmpreendimentos from "../pages/Manager/Conteudo/Empreendimentos/ListaEmpreendimentos/ListaEmpreendimentos";
import EmpreendimentoInterna from "../pages/EmpreendimentosInterna/EmpreendimentoInterna";
import EditaNumeros from "../pages/Manager/Conteudo/Numeros/EditaNumeros/EditaNumeros";
import CriaInfraestruturas from "../pages/Manager/Conteudo/Infraestruturas/CriaInfraestruturas/CriaInfraestruturas";
import ListaInfraestruturas from "../pages/Manager/Conteudo/Infraestruturas/ListaInfraestruturas/ListaInfraestruturas";
import ProtectedRoute from "./ProtectedRoute";

export function AppRoutes() {
  return (
    /* Páginas públicas */
    <Routes>
            <Route
        path="/"
        element={<Navigate to="https://cromoconstrutora.com.br/" replace />}
      />
                  <Route
        path="/home"
        element={<Navigate to="https://cromoconstrutora.com.br/" replace />}
      />
      
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/empreendimentos" element={<Empreendimentos />} />
      <Route path="/empreendimentos/:empreendimentoSlug" element={<EmpreendimentoInterna />} />
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/templates" element={<Templates />} />

      {/* Página Login */}
      <Route path="/manager" element={<Login />} />

      {/* Páginas privadas */}
      <Route path="/manager/painel" element={<ProtectedRoute><Painel /></ProtectedRoute>} />
      <Route path="/manager/perfil" element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
      <Route path="/manager/servicos" element={<ProtectedRoute><Servicos /></ProtectedRoute>} />
      <Route path="/manager/Configuracoes" element={<ProtectedRoute><Configuracoes /></ProtectedRoute>} />
      <Route path="/manager/Suporte" element={<ProtectedRoute><Suporte /></ProtectedRoute>} />

      {/* Conteúdos*/}
      <Route path="/manager/bannerlist" element={<ProtectedRoute><ListaBanners /></ProtectedRoute>} />
      <Route path="/manager/bannercreate" element={<ProtectedRoute><CriaBanner /></ProtectedRoute>} />
      <Route path="/manager/empreendimentolist" element={<ProtectedRoute><ListaEmpreendimentos /></ProtectedRoute>} />
      <Route path="/manager/empreendimentocreate" element={<ProtectedRoute><CriaEmpreendimentos /></ProtectedRoute>} />
      <Route path="/manager/infraestruturalist" element={<ProtectedRoute><ListaInfraestruturas /></ProtectedRoute>} />
      <Route path="/manager/infraestruturacreate" element={<ProtectedRoute><CriaInfraestruturas /></ProtectedRoute>} />
      <Route path="/manager/numeroedit" element={<ProtectedRoute><EditaNumeros /></ProtectedRoute>} />

    </Routes>
  );
}
