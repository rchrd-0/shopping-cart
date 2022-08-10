import React from 'react';
import styled from 'styled-components';

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

const Totals = styled.div`
  font-family: ${(props) => props.theme.font.display};
  font-size: 1.1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RowBold = styled(Row)`
  font-weight: 500;
`;

const Subtotal = styled.div`
  border-top: 1px solid ${(props) => props.theme.colour.lightGrey};
  border-bottom: 1px solid ${(props) => props.theme.colour.lightGrey};
  padding: 8px 0;
`;

export default OrderTotal;
