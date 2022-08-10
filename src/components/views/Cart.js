import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from '../elements/CartItem';
import Button from '../elements/Button';
import calcSubTotal from '../../helpers/calcOrder';
import OrderTotal from '../elements/OrderTotal';
import importAll from '../../helpers/importAll';
import greyLogo from '../../assets/icons/feather-light-grey.svg';

const Cart = (props) => {
  const { cart, cartSize, hideCart, increment, decrement, remove } = props;
  const subTotal = calcSubTotal(cart);
  const delivery = 25;
  const images = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <CartLayout>
      <CartShadow onClick={hideCart} />
      <ShoppingCart>
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
            <Checkout type="button">Checkout</Checkout>
          </>
        ) : (
          <>
            <Logo img={greyLogo} />
            <Button onClick={hideCart}>
              <Link to="/shop">View shop</Link>
            </Button>
          </>
        )}
      </ShoppingCart>
    </CartLayout>
  );
};

const CartLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
`;

const CartShadow = styled.div`
  flex: 1;
  background-color: #000000;
  opacity: 0.4;
`;

const ShoppingCart = styled.div`
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  flex: 0 0 520px;
  background-color: ${(props) => props.theme.colour.light};
  color: ${(props) => props.theme.colour.almostBlack};
  gap: 20px;
`;

const Heading = styled.h1`
  display: flex;
  gap: 1ch;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.font.display};
  font-size: 1.8rem;
`;

const SubHead = styled.span`
  color: ${(props) => props.theme.colour.darkGrey};
  border: 1px solid ${(props) => props.theme.colour.almostBlack};
  border-radius: 4px;
  font-size: 1rem;
  padding: 3px 6px;
`;

const Logo = styled.div`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120px;
  background-image: url('${(props) => props.img}');
`;

const Checkout = styled(Button)`
  background-color: ${(props) => props.theme.colour.primary};
  border: 1px solid ${(props) => props.theme.colour.primary};
  color: ${(props) => props.theme.colour.almostBlack};

  &:hover {
    background-color: ${(props) => props.theme.colour.secondary};
    border-color: ${(props) => props.theme.colour.secondary};
  }
`;

export default Cart;
