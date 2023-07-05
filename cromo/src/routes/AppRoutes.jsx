import React from "react";
import { Routes, Route } from "react-router-dom";
import { Redirect } from "react-router";


export function AppRoutes() {
  return (
    /* Páginas públicas */
    <Routes>
      <Route path="/" element={<Redirect to="https://cromoconstrutora.com.br/" />}/>      
    </Routes>
  );
}
