import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import uniqid from 'uniqid';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './assets/styles/style.css';
import getCatalog from './assets/productCatalog';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Get product catalog, generate and assign item ids on mount
  useEffect(() => {
    const catalog = getCatalog().map((item) => {
      return {
        ...item,
        id: uniqid(),
      };
    });

    setProducts([...catalog]);
  }, []);

  const addToCart = (id) => {
    console.log(cart);
    const targetItem = products.filter((item) => item.id === id)[0];
    const alreadyInCart = cart.filter((item) => item.id === id).length > 0;

    if (!alreadyInCart) {
      const newCartItem = { ...targetItem, quantity: 1 };
      setCart((prevState) => [...prevState, newCartItem]);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    }
  };

  return (
    <div id="app">
      <Router>
        <Nav />
        <Main products={products} addToCart={addToCart} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
