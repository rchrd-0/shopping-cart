import styled from 'styled-components';
import Button from './Button';

const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.colour.primary};
  border: 1px solid ${(props) => props.theme.colour.primary};
  color: ${(props) => props.theme.colour.almostBlack};

  &:hover {
    background-color: ${(props) => props.theme.colour.secondary};
    border-color: ${(props) => props.theme.colour.secondary};
  }
`;

export default ButtonPrimary;
