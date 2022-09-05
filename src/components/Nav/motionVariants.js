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

  home: {
    whileHover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: '500',
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

    whileHover: {
      opacity: [1, 0, 1],
      pathLength: [1, 0, 1],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },
};

export default variants;
