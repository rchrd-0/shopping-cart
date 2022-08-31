const variants = {
  list: {
    hover: {
      scale: 1.15,
      transition: {
        type: 'spring',
        stiffness: 500,
      },
    },
  },

  logo: {
    initial: {
      opacity: 0,
      pathLength: 0,
    },

    end: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  },
};

export default variants;
