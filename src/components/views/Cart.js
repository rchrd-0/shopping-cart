import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../elements/CartItem';
import calcSubTotal from '../../helpers/calcOrder';
import OrderTotal from '../elements/OrderTotal';
import importAll from '../../helpers/importAll';

const Cart = (props) => {
  const { cart, cartSize, hideCart, increment, decrement, remove } = props;
  const subTotal = calcSubTotal(cart);
  const delivery = 25;
  const images = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div id="cart-wrapper">
      <div id="cart-shadow" onClick={hideCart} />
      <div id="shopping-cart">
        <h1 className="content-header">
          {cart.length === 0
            ? 'Your cart is empty'
            : `Your cart ${cartSize} item(s)`}
        </h1>

        <div id="orders">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increment={increment}
              decrement={decrement}
              remove={remove}
              imgSrc={images[item.img]}
            />
          ))}
        </div>

        {cart.length > 0 ? (
          <>
            <OrderTotal subTotal={subTotal} delivery={delivery} />
            <button type="button">Checkout</button>
          </>
        ) : (
          <button type="button" onClick={hideCart}>
            <Link to="/products">View shop</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
