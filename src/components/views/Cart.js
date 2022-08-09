import React from 'react';
import CartItem from '../elements/CartItem';

const Cart = (props) => {
  const { cart, hideCart, increment, decrement, remove } = props;
  return (
    <div id="cart-wrapper">
      <div id="cart-shadow" onClick={hideCart} />
      <div id="shopping-cart">
        <h1 className="content-header">Your cart</h1>
        <div id="orders">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increment={increment}
              decrement={decrement}
              remove={remove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
