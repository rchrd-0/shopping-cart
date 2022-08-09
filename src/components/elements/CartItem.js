import React from 'react';

const CartItem = (props) => {
  const { item, increment, decrement } = props;
  const { id, name, quantity, price } = item;
  return (
    <div className="cart-card">
      <div className="cart-img" />
      <div className="cart-details">
        <p className="cart-name">{name}</p>
        <div className="cart-quant">
          <button
            type="button"
            className="quantity-btn"
            onClick={() => increment(id)}
          >
            +
          </button>
          <input type="number" className="input-quantity" value={quantity} />
          <button
            type="button"
            className="quantity-btn"
            onClick={() => decrement(id)}
          >
            -
          </button>
        </div>
        <button type="button" className="remove-btn">
          Remove
        </button>
      </div>
      <div className="cart-price">{price * quantity}</div>
    </div>
  );
};

export default CartItem;
