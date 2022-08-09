import React from 'react';

const CartItem = (props) => {
  const { cart } = props;
  return (
    <div className="cart-card">
      <div className="cart-img" />
      <div className="cart-details">
        <p className="cart-name">foo</p>
        <div className="cart-quant">
          <button type="button" className="quantity-btn">
            +
          </button>
          <input type="number" className="input-quantity" />
          <button type="button" className="quantity-btn">
            -
          </button>
        </div>
        <button type="button" className="remove-btn">
          Remove
        </button>
      </div>
      <div className="cart-price">price</div>
    </div>
  );
};

export default CartItem;
