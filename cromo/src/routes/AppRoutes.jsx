import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Admin from '../pages/Manager/Admin';
import FaleConosco from '../pages/FaleConosco/FaleConosco';
import Empreendimentos from '../pages/Empreendimentos/Empreendimentos';
import Login from '../pages/Manager/Login/Login';




export function AppRoutes() {
  return (

/* Páginas públicas */
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/faleconosco' element={<FaleConosco /> } />   
        <Route path='/empreendimentos' element={<Empreendimentos />  } /> 
        <Route path="/manager" element={ < Login /> }/>
{/* Páginas auxiliares */}

{/* Páginas privadas */}
          
        <Route path="/manager" element={ <Admin /> }/>

      </Routes>


  )
}
