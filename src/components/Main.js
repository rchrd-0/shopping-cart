import { Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import Home from './views/Home';
import Cart from './views/Cart';
import Products from './views/Products';

const Main = (props) => {
  const { products } = props;
  return (
    <main id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products catalog={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
