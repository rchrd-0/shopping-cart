import React from 'react';

const CartItem = (props) => {
  const { item, increment, decrement, remove } = props;
  const { id, name, quantity, price } = item;
  return (
    <div className="cart-card">
      <div className="cart-img" />
      <div className="cart-content">
        <div className="cart-top">
          <h2>{name}</h2>
          <button
            type="button"
            className="remove-btn"
            onClick={() => remove(id)}
          >
            X
          </button>
        </div>
        <div className="cart-bottom">
          <h3>QTY</h3>
          <button
            type="button"
            className="quantity-btn"
            onClick={() => decrement(id)}
          >
            &#x2212;
          </button>
          <p>{quantity}</p>
          <button
            type="button"
            className="quantity-btn"
            onClick={() => increment(id)}
          >
            &#x2b;
          </button>
          <p>HK${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
