import React from "react";
import {
  BtnExplorarContatiner,
  BtnExplorarPosition,
  BtnExplorarRetangulo,
  BtnExplorarText
} from "./Style";


export default function BtnExplorar() {
  return (
    <>
      <BtnExplorarContatiner>
        <BtnExplorarPosition>           
          <BtnExplorarRetangulo>               
            <div className="barra"> </div>
          </BtnExplorarRetangulo>   
          <BtnExplorarText>
            
            <a href="#secao-abaixo"><h3>CONTINUAR EXPLORANDO</h3></a>
            
          </BtnExplorarText>
        </BtnExplorarPosition>
      </BtnExplorarContatiner>
      <div id="secao-abaixo">
        {/* Conteúdo da seção */}
      </div>
    </>
  );
}