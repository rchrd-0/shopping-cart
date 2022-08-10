import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import landing from '../../assets/images/landing.jpg';
import ButtonPrimary from '../elements/ButtonPrimary';

const Home = () => {
  return (
    <Hero>
      <Cta>
        <Heading>Artisan handmade ceramics</Heading>
        <Subhead>Thrown and fired with love from Hong Kong</Subhead>
        <Link to="/shop">
          <ShopNow>View shop</ShopNow>
        </Link>
      </Cta>
    </Hero>
  );
};

const Hero = styled.div`
  padding: 100px 0 0 80px;
  flex: 1;
  background-image: url(${landing});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.colour.light};
`;

const Cta = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;

const Subhead = styled.h2`
  font-size: 1.8rem;
`;

const ShopNow = styled(ButtonPrimary)`
  margin-top: 20px;
  font-size: 1.5rem;
  align-self: flex-start;
`;

export default Home;
