import React from 'react';
import styled from 'styled-components';
import trashIcon from '../../assets/icons/trash.svg';

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

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  gap: 20px;
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.colour.almostBlack};
`;

const CartImg = styled.div`
  width: 130px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('${(props) => props.img}');
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Content = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const RowTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
`;

const RemoveBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url('${(props) => props.img}');
  background-position: center;
  background-size: 18px;
  background-repeat: no-repeat;
`;

const RowBottom = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 120px;
  font-size: 1.1rem;
  align-items: center;
`;

const SpanWeight = styled.span`
  font-weight: 500;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  min-width: 20px;
  font-weight: 300;
`;

const QuantityBtn = styled.button`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ProdPrice = styled.span`
  justify-self: end;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default CartItem;
