import React from 'react';
import { AnimatePresence } from 'framer-motion';

import ShoppingCart from './ShoppingCart';
import { Backdrop, EventWrapper } from './styledCart';
import variants from './motionVariants';

const Cart = (props) => {
  const { cart, cartSize, hideCart, cartActive, increment, decrement, remove } =
    props;

  return (
    <AnimatePresence>
      {cartActive ? (
        <Backdrop
          variants={variants.backdrop}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <EventWrapper onClick={hideCart} />
          <ShoppingCart
            cart={cart}
            cartSize={cartSize}
            increment={increment}
            decrement={decrement}
            remove={remove}
            hideCart={hideCart}
            animate={variants.shoppingCart}
          />
        </Backdrop>
      ) : null}
    </AnimatePresence>
  );
};

export default Cart;
