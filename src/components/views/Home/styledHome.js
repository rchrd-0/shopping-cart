import styled from 'styled-components';
import { motion } from 'framer-motion';

import landing from '../../../assets/images/landing.jpg';
import ButtonPrimary from '../../elements/ButtonPrimary';

export const Hero = styled(motion.div)`
  padding: 100px 0 0 80px;
  flex: 1;
  background-image: url(${landing});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.colour.light};
`;

export const Cta = styled(motion.div)`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 500;
`;

export const Subhead = styled(motion.h2)`
  font-size: 1.8rem;
`;

export const ShopNow = styled(ButtonPrimary)`
  margin-top: 20px;
  font-size: 1.5rem;
  align-self: flex-start;
`;
