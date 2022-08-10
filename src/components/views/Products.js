import React from 'react';
import styled from 'styled-components';
import ProductItem from '../elements/ProductItem';
import importAll from '../../helpers/importAll';

const Products = (props) => {
  const { catalog, addToCart } = props;
  const images = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <ProductsLayout>
      {catalog.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          addToCart={addToCart}
          imgSrc={images[item.img]}
        />
      ))}
    </ProductsLayout>
  );
};

const ProductsLayout = styled.div`
  padding: 60px 40px 80px;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  grid-auto-rows: fit-content;
  justify-content: center;
  row-gap: 40px;
  column-gap: 50px;
`;

export default Products;
