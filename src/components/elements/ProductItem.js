import React from 'react';
import styled from 'styled-components';
import importAll from '../../helpers/importAll';

const ProductItem = (props) => {
  const { product, addToCart } = props;
  const { name, price, id, img } = product;
  const images = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <Card>
      <ProductImage img={images[img]} />
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
