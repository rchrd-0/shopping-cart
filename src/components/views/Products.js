import React from 'react';
import ProductItem from '../elements/ProductItem';

const Products = (props) => {
  return (
    <>
      <h1 className="content-header">Products</h1>
      <div id="products">
        <div className="products-wrapper">
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
};

export default Products;
