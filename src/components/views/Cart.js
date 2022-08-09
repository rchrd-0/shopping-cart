import React from 'react';
import CartItem from '../elements/CartItem';
import calcSubTotal from '../../helpers/calcOrder';
import OrderTotal from '../elements/OrderTotal';

const Cart = (props) => {
  const { cart, hideCart, increment, decrement, remove } = props;
  const subTotal = calcSubTotal(cart);
  const delivery = 25;
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
        {cart.length > 0 ? (
          <OrderTotal subTotal={subTotal} delivery={delivery} />
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
