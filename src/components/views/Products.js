import React from 'react';
import ProductItem from '../elements/ProductItem';
import importAll from '../../helpers/importAll';

const Products = (props) => {
  const { catalog, addToCart } = props;
  const images = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <>
      <h1 className="content-header">Products</h1>
      <div id="products">
        <div className="products-wrapper">
          {catalog.map((item) => (
            <ProductItem
              key={item.id}
              product={item}
              addToCart={addToCart}
              imgSrc={images[item.img]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
