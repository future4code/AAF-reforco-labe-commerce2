import * as C from "./styled";
import React, { useState, useEffect } from "react";

export function Card(props) {
  return (
  
      <C.AreaCard>
        <C.AreaCardFilho>
          <C.AreaNeto>
          <h1>{props.name}</h1>
          <C.AreaImg>
          <img src={props.imagem}></img>
          </C.AreaImg>
          <p> R$ {props.valor.toFixed(2)}</p>
          <button>Adicionar ao Carrinho</button>
          </C.AreaNeto>
        </C.AreaCardFilho>
      </C.AreaCard>
  
  );
}
