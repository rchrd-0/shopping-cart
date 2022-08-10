import React from 'react';
import styled from 'styled-components';

const ProductItem = (props) => {
  const { product, addToCart, imgSrc } = props;
  const { name, price, id } = product;
  return (
    <Card>
      <ProductImage img={imgSrc} />
      <div className="card-bottom">
        <div className="product-details">
          <p className="prod-name">{name}</p>
          <p className="prod-price">HK${price}</p>
        </div>
        <button type="button" onClick={() => addToCart(id)}>
          Add
        </button>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
`;

const ProductImage = styled.div`
  height: 300px;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default ProductItem;
