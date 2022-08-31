import React from 'react';
import {
  Card,
  CartImg,
  Content,
  RowTop,
  ProductName,
  RemoveBtn,
  RowBottom,
  SpanWeight,
  QuantityContainer,
  Quantity,
  QuantityBtn,
  ProdPrice,
} from './styledCart';

import trashIcon from '../../../assets/icons/trash.svg';

const CartItem = (props) => {
  const { item, increment, decrement, remove, imgSrc } = props;
  const { id, name, quantity, price } = item;

  return (
    <Card>
      <CartImg img={imgSrc} />
      <Content>
        <RowTop>
          <ProductName>{name}</ProductName>
          <RemoveBtn onClick={() => remove(id)} img={trashIcon} />
        </RowTop>
        <RowBottom>
          <SpanWeight>QTY</SpanWeight>
          <QuantityContainer>
            <QuantityBtn type="button" onClick={() => decrement(id)}>
              &#x2212;
            </QuantityBtn>
            <Quantity>{quantity}</Quantity>
            <QuantityBtn
              type="button"
              className="quantity-btn"
              onClick={() => increment(id)}
            >
              &#x2b;
            </QuantityBtn>
          </QuantityContainer>
          <ProdPrice>HK${(price * quantity).toFixed(2)}</ProdPrice>
        </RowBottom>
      </Content>
    </Card>
  );
};

export default CartItem;
