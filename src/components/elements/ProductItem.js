import React from 'react';
import styled from 'styled-components';

const ProductItem = (props) => {
  const { product, addToCart, imgSrc } = props;
  const { name, price, id } = product;
  return (
    <Card>
      <ProductImage img={imgSrc} />
      <CardBottom>
        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductPrice>HK${price}</ProductPrice>
        </ProductDetails>
        <AddBtn onClick={() => addToCart(id)}>Add to cart</AddBtn>
      </CardBottom>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  font-family: ${(props) => props.theme.font.display};
`;

const ProductImage = styled.div`
  height: 300px;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const ProductDetails = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colour.almostBlack};
`;

const ProductName = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
`;

const ProductPrice = styled.p`
  font-family: ${(props) => props.theme.font.text};
  font-size: 1.2rem;
`;

const AddBtn = styled.button`
  align-self: center;
  background-color: ${(props) => props.theme.colour.darkGrey};
  color: ${(props) => props.theme.colour.light};
  transition: all 0.1s ease-in-out;
  border: 1px solid ${(props) => props.theme.colour.darkGrey};

  &:hover {
    background-color: ${(props) => props.theme.colour.lightGrey};
    color: ${(props) => props.theme.colour.almostBlack};
    transition: all 0.1s ease-in-out;
  }

  &:active {
    filter: brightness(0.7);
    transition: all 0.1s ease-in-out;
  }
`;

export default ProductItem;
