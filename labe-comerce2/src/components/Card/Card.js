import * as C from "./styled";
import React, { useState, useEffect } from "react";
// import { carrinho } from '../../Pages/Home/Home'


export function Card(props) {

  return (
  
      <C.AreaCard>
        <C.AreaCardFilho>
          <C.AreaNeto>
          <h1>{props.name}</h1>
          <C.AreaImg>
          <C.MaxImg src={props.imagem}></C.MaxImg>
          </C.AreaImg>
          <p> R$ {props.valor.toFixed(2)}</p>
          <button onClick={()=> props.carrinho(props.id)}>Adicionar ao Carrinho</button>
          </C.AreaNeto>
        </C.AreaCardFilho>
      </C.AreaCard>
  
  );
}
