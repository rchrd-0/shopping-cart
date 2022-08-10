import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
a,
a:visited {
  text-decoration: none;
  color: inherit;
  user-select: none;
}

button {
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 8px;
}
`;

export default GlobalStyle;
