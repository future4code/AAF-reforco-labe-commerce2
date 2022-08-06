import React from 'react'
import * as C from './StyledCarrinho'


export const Carrinho = (props) => {

  const mapeando = props.cart?.map((item) => {
    return (
      <C.Carrinho key={item.id}>
          <p>
            {item.name} 
          </p>
          <p>
            {"R$" + item.valor.toFixed(2)}
          </p>
          <img src={item.imagem}></img>
      </C.Carrinho>
    )
  })


  return (
    <C.AreaCart>
        <C.AreaOne></C.AreaOne>
        <C.AreaTwo>
          <C.Areaborder>
           <p>{mapeando}</p>
           </C.Areaborder>
        </C.AreaTwo>
    </C.AreaCart>
  )
}
