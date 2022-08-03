import React, { useEffect, useState } from "react";
import * as C from "./Styled";
import { Card } from "../../components/Card/Card";
import angra from "../../img/angra.png";
import governador from "../../img/governador.png";
import ibitira from "../../img/Ibitira.png";
import siderolitos from "../../img/siderolitos.png";
function Home() {
  const [order, setOrder] = useState("Crescente");
  const [search, setSearch] = useState("")
  const [minValor, setMinValor] = useState(-Infinity)
  const [maxValor, setMaxValor] = useState(+Infinity)
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
  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }
  const onChangeMinValor = (event) => {
    setMinValor(event.target.value)
  }
  const onChangeMaxValor = (event) => {
    setMaxValor(event.target.value)
  }


  // const filtro = produtos.
  const resultado = produtos.sort((a,b)=>{
      switch(order){
        case "Crescente": 
        return a.valor - b.valor;
        case "Decrescente":
          return b.valor - a.valor
      }
  }).filter((item)=> {
    const itemName = item.name.toLowerCase()
    return itemName.includes(search)
  }).filter((item)=> {
    return item.valor >= minValor
  }).filter((item)=> {
    return item.valor <= maxValor
  })

  const listaDeProdutos = resultado.map((produto) => {
    return (
      <Card
        imagem={produto.imagem}
        name={produto.name}
        valor={produto.valor}
        produtos={produto}
      />
    );
  })
  // const renderiza = produtos.map((produto) => {
  //   return <Card imagem={produto.imagem} name={produto.name} valor={produto.valor} produtos={produto}/>
  // })
  return (
    <C.Container>
      <div>
        <input placeholder="Buscar" value={search} onChange={onChangeSearch}/>   
        <input type="number" 
        placeholder="Valor min" 
        value={minValor} 
        onChange={onChangeMinValor}/>

        <input type="number" placeholder="Valor Max" value={maxValor} onChange={onChangeMaxValor}/>
       
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
