import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home';
import Products from './views/Products';

const Main = (props) => {
  const { products, addToCart } = props;

  return (
    <main id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products catalog={products} addToCart={addToCart} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
