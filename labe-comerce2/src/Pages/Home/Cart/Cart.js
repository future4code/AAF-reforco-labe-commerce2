import React from "react";

function Cart(props) {
  const cartId = props.cart.id
  console.log(cartId)
  
  return (
    <div>
      <h1>{props.cart.id}</h1>
    </div>
  );
}
export default Cart;
