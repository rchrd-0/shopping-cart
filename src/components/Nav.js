import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import cart from '../assets/icons/cart.svg';
import cartActive from '../assets/icons/cart-active.svg';

const Nav = (props) => {
  const { cartSize, showCart } = props;
  const activeStyle = {
    color: '#f2c4bf',
    transition: 'color 0.1s ease-in-out',
  };
  return (
    <Header>
      <Home>
        <Link to="/">Keramikos</Link>
      </Home>
      <nav>
        <LinksTo>
          <ListItem>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/products"
            >
              Products
            </NavLink>
          </ListItem>
          <CartWrapper>
            <Cart onClick={showCart} />
            {cartSize > 0 ? <SizeActive>{cartSize}</SizeActive> : <Size />}
          </CartWrapper>
        </LinksTo>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  min-width: 100vw;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colour.darkGrey};
  font-family: ${(props) => props.theme.font.display};
  padding: 0 80px 0 60px;
  height: 60px;
`;

const Home = styled.h1`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colour.primary};
  font-weight: 300;
  text-transform: lowercase;
`;

const LinksTo = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.colour.light};
  transition: color 0.1s ease-in-out;
`;

const ListItem = styled.li`
  &:hover {
    color: ${(props) => props.theme.colour.secondary};
    transition: color 0.1s ease-in-out;
  }
`;

const CartWrapper = styled.li`
  display: flex;
  gap: 5px;
`;

const Cart = styled.div`
  width: 30px;
  height: 30px;
  background-size: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${cart});
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-image: url(${cartActive});
    transition: all 0.1s ease-in-out;
  }
`;

const Size = styled.div`
  width: 28px;
`;

const SizeActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  width: 28px;
  height: 28px;
  align-self: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colour.primary};
  user-select: none;
`;

export default Nav;
