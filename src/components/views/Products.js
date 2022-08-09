import React from 'react';
import ProductItem from '../elements/ProductItem';

const Products = (props) => {
  const { catalog, addToCart } = props;
  return (
    <>
      <h1 className="content-header">Products</h1>
      <div id="products">
        <div className="products-wrapper">
          {catalog.map((item) => (
            <ProductItem key={item.id} product={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
