import React from 'react';
import styled from 'styled-components';
import { Totals, Row, RowBold, Subtotal } from './styledCart';

const OrderTotal = (props) => {
  const { subTotal, delivery } = props;
  return (
    <Totals>
      <Subtotal>
        <Row>
          <p>Subtotal</p>
          <p>HK${subTotal.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Delivery</p>
          <p>HK${delivery.toFixed(2)}</p>
        </Row>
      </Subtotal>
      <RowBold>
        <p>Total</p>
        <p>HK${(subTotal + delivery).toFixed(2)}</p>
      </RowBold>
    </Totals>
  );
};

export default OrderTotal;
