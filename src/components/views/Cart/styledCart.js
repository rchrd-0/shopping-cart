import styled from 'styled-components';
import { motion } from 'framer-motion';

// Cart view wrapper, backdrop
export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
`;

export const EventWrapper = styled.div`
  flex: 1;
`;

// Shopping cart slide out modal
export const ShoppingModal = styled(motion.div)`
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  flex: 0 0 520px;
  background-color: ${(props) => props.theme.colour.light};
  color: ${(props) => props.theme.colour.almostBlack};
  gap: 20px;
  z-index: 2;
`;

export const Heading = styled.h1`
  display: flex;
  gap: 1ch;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.font.display};
  font-size: 1.8rem;
`;

export const SubHead = styled.span`
  color: ${(props) => props.theme.colour.darkGrey};
  border: 1px solid ${(props) => props.theme.colour.almostBlack};
  border-radius: 4px;
  font-size: 1rem;
  padding: 3px 6px;
`;

export const LogoWrapper = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
`;

// Cart items
export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  gap: 20px;
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.colour.almostBlack};
`;

export const CartImg = styled.div`
  width: 130px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('${(props) => props.img}');
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const Content = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const RowTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
`;

export const RemoveBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url('${(props) => props.img}');
  background-position: center;
  background-size: 18px;
  background-repeat: no-repeat;
`;

export const RowBottom = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 120px;
  font-size: 1.1rem;
  align-items: center;
`;

export const SpanWeight = styled.span`
  font-weight: 500;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  min-width: 20px;
  font-weight: 300;
`;

export const QuantityBtn = styled.button`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ProdPrice = styled.span`
  justify-self: end;
  font-size: 1.2rem;
  font-weight: 500;
`;

// Order totals
export const Totals = styled.div`
  font-family: ${(props) => props.theme.font.display};
  font-size: 1.1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowBold = styled(Row)`
  font-weight: 500;
`;

export const Subtotal = styled.div`
  border-top: 1px solid ${(props) => props.theme.colour.lightGrey};
  border-bottom: 1px solid ${(props) => props.theme.colour.lightGrey};
  padding: 8px 0;
`;
