import React from "react";
import * as C from "../Cart/styled";

function Cart(props) {
  const cartId = props.cart.id
  console.log(cartId)
  
  return (
    <C.AreaCarrinho>
      <h1>{props.cart.id}</h1>
    </C.AreaCarrinho>
  );
}
export default Cart;
