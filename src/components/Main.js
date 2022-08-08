import { Routes, Route } from 'react-router-dom';
import React from 'react';
import CartItem from './elements/CartItem';
import ProductItem from './elements/ProductItem';
import Home from './views/Home';
import Cart from './views/Cart';
import Products from './views/Products';

const Main = () => {
  return (
    <div id="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Main;
