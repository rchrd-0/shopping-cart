import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  return (
    <header id="page-header">
      <h1>
        <Link to="/">placeholder</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
