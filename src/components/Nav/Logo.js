import React from 'react';
import { motion } from 'framer-motion';

const Logo = (props) => {
  const { pathVariants } = props;

  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="end"
    >
      <motion.path
        d="M30.36 18.36C32.0488 16.6712 32.9975 14.3808 32.9975 11.9925C32.9975 9.60422 32.0488 7.31377 30.36 5.625C28.6712 3.93623 26.3808 2.9875 23.9925 2.9875C21.6042 2.9875 19.3138 3.93623 17.625 5.625L7.5 15.75V28.5H20.25L30.36 18.36Z"
        stroke="#F2C4BF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.path
        d="M24 12L3 33"
        stroke="#F2C4BF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.path
        d="M26.25 22.5H13.5"
        stroke="#F2C4BF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default Logo;
