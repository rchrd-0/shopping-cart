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

  // Get product catalog, generate ids on mount
  useEffect(() => {
    const catalog = getCatalog().map((item) => {
      return {
        ...item,
        id: uniqid(),
      };
    });
    setProducts([...catalog]);
  }, []);

  return (
    <div id="app">
      <Router>
        <Nav />
        <Main products={products} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
