import React from 'react';

const OrderTotal = (props) => {
  const { subTotal, delivery } = props;
  return (
    <div id="order-total">
      <div id="subtotal">
        <div className="order-row">
          <p>Subtotal</p>
          <p>HK${subTotal.toFixed(2)}</p>
        </div>
        <div className="order-row">
          <p>Delivery</p>
          <p>HK${delivery.toFixed(2)}</p>
        </div>
      </div>
      <div id="total">
        <div className="order-row">
          <p>Total</p>
          <p>HK${(subTotal + delivery).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;
