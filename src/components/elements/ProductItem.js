import React from 'react';

const ProductItem = (props) => {
  const { product } = props;
  const { name, price } = product;
  return (
    <div className="product-card">
      <div className="card-img" />
      <div className="card-bottom">
        <div className="product-details">
          <p className="prod-name">{name}</p>
          <p className="prod-price">HK${price}</p>
        </div>
        <button type="button">Add</button>
      </div>
    </div>
  );
};

export default ProductItem;
