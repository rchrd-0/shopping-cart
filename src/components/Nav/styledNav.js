import styled from 'styled-components';
import { motion } from 'framer-motion';
import cart from '../../assets/icons/cart.svg';

export const Header = styled.header`
  position: fixed;
  min-width: 100vw;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colour.darkGrey};
  font-family: ${(props) => props.theme.font.display};
  padding: 0 80px 0 60px;
  height: 60px;
`;

export const Home = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colour.primary};
  font-weight: 300;
  text-transform: lowercase;
  margin-right: 20px;
`;

export const LinksTo = styled(motion.ul)`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.colour.light};
  transition: color 0.1s ease-in-out;
`;

export const ListItem = styled(motion.li)`
  &:hover {
    color: ${(props) => props.theme.colour.secondary};
    transition: color 0.1s ease-in-out;
  }
`;

export const CartWrapper = styled.li`
  display: flex;
  gap: 5px;
`;

export const Cart = styled(motion.div)`
  width: 30px;
  height: 30px;
  background-size: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${cart});
  cursor: pointer;
  filter: invert(100%) sepia(39%) saturate(542%) hue-rotate(180deg)
    brightness(101%) contrast(90%);
  transition: filter 0.1s ease-in-out;

  &:hover {
    filter: invert(86%) sepia(6%) saturate(1009%) hue-rotate(317deg)
      brightness(85%) contrast(129%);
    transition: filter 0.1s ease-in-out;
  }
`;

export const Size = styled.div`
  width: 28px;
`;

export const SizeActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  width: 28px;
  height: 28px;
  align-self: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colour.primary};
  user-select: none;
`;
