import React from 'react';

const ProductItem = (props) => {
  const { product, addToCart } = props;
  const { name, price, id } = product;
  return (
    <div className="product-card">
      <div className="card-img" />
      <div className="card-bottom">
        <div className="product-details">
          <p className="prod-name">{name}</p>
          <p className="prod-price">HK${price}</p>
        </div>
        <button type="button" onClick={() => addToCart(id)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
