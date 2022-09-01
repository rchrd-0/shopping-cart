import React from 'react';

import variants from './motionVariants';
import ProductsLayout from './styledProducts';
import ProductItem from '../../elements/ProductItem';
import importAll from '../../../helpers/importAll';

const Products = (props) => {
  const { catalog, addToCart } = props;
  const images = importAll(
    require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <ProductsLayout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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

export default Products;
