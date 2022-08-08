import React, { useContext } from 'react';
import ProductItem from '../elements/ProductItem';

const Products = (props) => {
  const { catalog } = props;
  return (
    <>
      <h1 className="content-header">Products</h1>
      <div id="products">
        <div className="products-wrapper">
          {catalog.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
