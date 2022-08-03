import React, { useState } from "react";
import * as C from "./Styled";
import {Card} from "../../components/Card/Card";

function Home() {

  const [produtos, setProdutos] = useState([
    {
      id: 1,
      imagem: "http://picsum.photos/30/30",
      name: "Selenita",
      valor: "15.236,00"
    },
    {
      id: 2,
      imagem: "http://picsum.photos/30/30",
      name: "Pirita",
      valor: "15.200,00"
    },
    {
      id: 3,
      imagem: "http://picsum.photos/30/30",
      name: "Rubi",
      valor: "15.800,00"
    },
    {
      id: 4,
      imagem: "http://picsum.photos/30/30",
      name: "Diamante",
      valor: "15.800,00"
    }

  ])

  const listaDeProdutos = produtos.map((produto) => {
    return <Card imagem={produto.imagem} name={produto.name} valor={produto.valor} produtos={produto}/>
  })


  return (

    <C.Container>
      <C.ContainerFilho>
        {listaDeProdutos}
      </C.ContainerFilho>
    </C.Container>
  );
}
export default Home;
