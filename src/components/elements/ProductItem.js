import React from 'react';

const ProductItem = () => {
  return (
    <div className="product-card">
      <div className="card-img" />
      <div className="card-bottom">
        <div className="product-details">
          <p className="prod-name">Product 001</p>
          <p className="prod-price">$100</p>
        </div>
        <button type="button">Add</button>
      </div>
    </div>
  );
};

export default ProductItem;
