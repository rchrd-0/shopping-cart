import styled from 'styled-components';

const Button = styled.button`
  align-self: center;
  background-color: ${(props) => props.theme.colour.darkGrey};
  color: ${(props) => props.theme.colour.light};
  transition: all 0.1s ease-in-out;
  border: 1px solid ${(props) => props.theme.colour.darkGrey};
  font-family: ${(props) => props.theme.font.display};

  &:hover {
    background-color: ${(props) => props.theme.colour.lightGrey};
    color: ${(props) => props.theme.colour.almostBlack};
    transition: all 0.1s ease-in-out;
  }

  &:active {
    filter: brightness(0.7);
    transition: all 0.1s ease-in-out;
  }
`;

export default Button;
