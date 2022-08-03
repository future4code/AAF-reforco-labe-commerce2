import React, { useEffect, useState } from "react";
import * as C from "./Styled";
import { Card } from "../../components/Card/Card";
import angra from "../../img/angra.png";
import governador from "../../img/governador.png";
import ibitira from "../../img/Ibitira.png";
import siderolitos from "../../img/siderolitos.png";
function Home() {
  const [order, setOrder] = useState("Crescente");
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      imagem: angra,
      name: "Angra dos Reis",
      valor: 100,
    },
    {
      id: 2,
      imagem: governador,
      name: "Governador Valadares",
      valor: 1.5,
    },
    {
      id: 3,
      imagem: ibitira,
      name: "Ibitira",
      valor: 4.0,
    },
    {
      id: 4,
      imagem: siderolitos,
      name: "Siderolitos",
      valor: 15.8,
    },
  ]);
  const onChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const listaDeProdutos = produtos.map((produto) => {
    return (
      <Card
        imagem={produto.imagem}
        name={produto.name}
        valor={produto.valor}
        produtos={produto}
      />
    );
  });

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
      <C.ContainerFilho>{listaDeProdutos}</C.ContainerFilho>
    </C.Container>
  );
}
export default Home;
