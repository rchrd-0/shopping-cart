const variants = {
  hero: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },

  cta: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        when: 'beforeChildren',
      },
    },
  },

  children: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },
  },

  button: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      y: [0, -15, 0, -15, 0],
      transition: {
        y: {
          delay: 3.5,
          type: 'spring',
          duration: 0.8,
          ease: 'backIn',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 4.5,
        },
      },
    },
  },
};

export default variants;
