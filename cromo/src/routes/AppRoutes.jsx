import React from "react";
import { Routes, Route,  Redirect } from "react-router-dom";


export function AppRoutes() {
 

  return (
    /* Páginas públicas */
    <Routes>

      <Route path="/" element={<Redirect to="https://cromoconstrutora.com.br/"/>}/>      


    </Routes>
  );
}
