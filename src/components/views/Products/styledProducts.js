import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsLayout = styled(motion.div)`
  padding: 60px 40px 80px;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  grid-auto-rows: fit-content;
  justify-content: center;
  row-gap: 40px;
  column-gap: 50px;
`;

export default ProductsLayout;
