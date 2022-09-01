import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Footer from './Footer';

const Main = (props) => {
  const { products, addToCart } = props;

  const location = useLocation();

  return (
    <ContentLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Products catalog={products} addToCart={addToCart} />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ContentLayout>
  );
};

const ContentLayout = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
  background-color: ${(props) => props.theme.colour.base};

  > div {
    width: 100%;
  }
  user-select: none;
`;

export default Main;
