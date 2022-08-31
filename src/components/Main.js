import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Home from './views/Home';
import Products from './views/Products';
import Footer from './Footer';

const Main = (props) => {
  const { products, addToCart } = props;

  return (
    <ContentLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Products catalog={products} addToCart={addToCart} />}
        />
      </Routes>
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
