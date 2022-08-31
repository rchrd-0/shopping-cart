import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import {
  Header,
  Home,
  LinksTo,
  ListItem,
  CartWrapper,
  Cart,
  Size,
  SizeActive,
} from './styledNav';
import variants from './motionVariants';
import Logo from './Logo';

const Nav = (props) => {
  const { cartSize, showCart } = props;

  const style = {
    active: {
      color: '#f2c4bf',
      transition: 'color 0.2s ease-in-out',
    },
    default: {
      transition: 'color 0.2s ease-in-out',
    },
  };

  return (
    <Header>
      <Link to="/">
        <Home
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Logo pathVariants={variants.logo} />
          Keramikos
        </Home>
      </Link>
      <nav>
        <LinksTo>
          <ListItem variants={variants.list} whileHover="hover">
            <NavLink
              style={({ isActive }) =>
                isActive ? style.active : style.default
              }
              to="/"
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem variants={variants.list} whileHover="hover">
            <NavLink
              style={({ isActive }) =>
                isActive ? style.active : style.default
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </ListItem>
          <CartWrapper>
            <Cart
              onClick={showCart}
              whileHover={{
                scale: 1.3,
                transition: { type: 'spring', stiffness: 500 },
              }}
            />
            {cartSize > 0 ? <SizeActive>{cartSize}</SizeActive> : <Size />}
          </CartWrapper>
        </LinksTo>
      </nav>
    </Header>
  );
};

export default Nav;
