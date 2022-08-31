import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import OrderTotal from './OrderTotal';
import Logo from './Logo';
import importAll from '../../../helpers/importAll';
import calcSubTotal from '../../../helpers/calcOrder';
import Button from '../../elements/Button';
import ButtonPrimary from '../../elements/ButtonPrimary';

import { ShoppingModal, Heading, SubHead } from './styledCart';

const ShoppingCart = (props) => {
  const { cart, cartSize, increment, decrement, remove, hideCart, animate } =
    props;

  const delivery = 25;
  const subTotal = calcSubTotal(cart);

  const images = importAll(
    require.context('../../../assets/images/', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <ShoppingModal variants={animate}>
      {cart.length === 0 ? (
        <Heading>Your cart is empty</Heading>
      ) : (
        <Heading>
          Your cart
          <SubHead>
            {cartSize} {cartSize > 1 ? 'items' : 'item'}
          </SubHead>
        </Heading>
      )}

      {cart.length > 0 ? (
        <>
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
          <OrderTotal subTotal={subTotal} delivery={delivery} />
          <ButtonPrimary type="button">Checkout</ButtonPrimary>
        </>
      ) : (
        <>
          <Logo />
          <Link to="/shop" onClick={hideCart}>
            <Button>View shop</Button>
          </Link>
        </>
      )}
    </ShoppingModal>
  );
};

export default ShoppingCart;
