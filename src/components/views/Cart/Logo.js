import React from 'react';
import { motion } from 'framer-motion';
import { LogoWrapper } from './styledCart';

const pathVariants = {
  initial: {
    opacity: 1,
    pathLength: 1,
    stroke: '#BABDBF',
  },

  end: {
    opacity: 0,
    pathLength: 0,
    stroke: '#f2c4bf',
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',

      stroke: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 4,
        ease: 'easeInOut',
      },
    },
  },
};

const Logo = () => {
  return (
    <LogoWrapper>
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate="end"
        transition="transition"
      >
        <motion.path
          d="M101.2 61.2C106.829 55.5708 109.992 47.9359 109.992 39.975C109.992 32.0141 106.829 24.3792 101.2 18.75C95.5708 13.1208 87.9359 9.95831 79.975 9.95831C72.0141 9.95831 64.3792 13.1208 58.75 18.75L25 52.5V95H67.5L101.2 61.2Z"
          stroke="#BABDBF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        <motion.path
          d="M80 40L10 110"
          stroke="#BABDBF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        <motion.path
          d="M87.5 75H45"
          stroke="#BABDBF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
      </motion.svg>
    </LogoWrapper>
  );
};

export default Logo;
