import React from 'react'
import * as C from './StyledCarrinho'


export const Carrinho = (props) => {

    const mapeando = props.cart?.map((item)=> {
        return (
            <C.Carrinho key={item.id}>
              {item.name} {"R$"+item.valor.toFixed(2)}
              </C.Carrinho>
        )
    })


  return (
    <C.AreaCart>
        <C.AreaOne></C.AreaOne>
        <C.AreaOne>
           <p>{mapeando}</p>
        </C.AreaOne>
    </C.AreaCart>
  )
}
