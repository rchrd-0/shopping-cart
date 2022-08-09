const calcSubTotal = (cart) => {
  const subTotal = cart.reduce((acc, obj) => {
    return acc + obj.price * obj.quantity;
  }, 0);

  return subTotal;
};

export default calcSubTotal;
