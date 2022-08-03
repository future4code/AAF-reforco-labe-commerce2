import * as C from "./styled";
import React, { useState, useEffect } from "react";

export function Card(props) {
  return (
    <div>
      <C.AreaCard>
        <C.AreaCardFilho>
          <h1>{props.name}</h1>
          <img src={props.imagem}></img>
          <p> R$ {props.valor}</p>
          <button>Adicionar ao Carrinho</button>
        </C.AreaCardFilho>
      </C.AreaCard>
    </div>
  );
}
