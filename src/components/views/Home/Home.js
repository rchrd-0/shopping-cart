import React from 'react';
import { Link } from 'react-router-dom';

import variants from './motionVariants';
import { Hero, Cta, Heading, Subhead, ShopNow } from './styledHome';

const Home = () => {
  return (
    <Hero
      variants={variants.hero}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Cta variants={variants.cta}>
        <Heading variants={variants.children}>
          Artisan handmade ceramics
        </Heading>
        <Subhead variants={variants.children}>
          Thrown and fired with love from Hong Kong
        </Subhead>
        <ShopNow variants={variants.button}>
          <Link to="/shop">View shop</Link>
        </ShopNow>
      </Cta>
    </Hero>
  );
};

export default Home;
