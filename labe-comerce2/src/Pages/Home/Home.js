import React, { useEffect, useState } from "react";
import * as C from "./Styled";
import { Card } from "../../components/Card/Card";

function Home() {
  const [order, setOrder] = useState("Crescente")
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      imagem: "http://picsum.photos/30/30",
      name: "Selenita",
      valor: "100"
    },
    {
      id: 2,
      imagem: "http://picsum.photos/30/30",
      name: "Pirita",
      valor: "1500"
    },
    {
      id: 3,
      imagem: "http://picsum.photos/30/30",
      name: "Rubi",
      valor: "4000"
    },
    {
      id: 4,
      imagem: "http://picsum.photos/30/30",
      name: "Diamante",
      valor: "15.800,00"
    }

  ])
  const onChangeOrder = (event) => {
    setOrder(event.target.value)
  }


  const listaDeProdutos = produtos.map((produto) => {
    return <Card imagem={produto.imagem} name={produto.name} valor={produto.valor} produtos={produto} />
  })

  // const renderiza = produtos.map((produto) => {
  //   return <Card imagem={produto.imagem} name={produto.name} valor={produto.valor} produtos={produto}/>
  // })
  return (
    <C.Container>
      <div>
        <select value={order} onChange={onChangeOrder}>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </select>
      </div>
      <C.ContainerFilho>
        {listaDeProdutos}
      </C.ContainerFilho>
    </C.Container>
  );
}
export default Home;
