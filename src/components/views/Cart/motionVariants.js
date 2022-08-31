const variants = {
  backdrop: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },

    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        when: 'afterChildren',
      },
    },
  },

  shoppingCart: {
    initial: {
      x: '100%',
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
    },

    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  },
};

export default variants;
