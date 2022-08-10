import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
a,
a:visited {
  text-decoration: none;
  color: inherit;
  user-select: none;
}
`;

export default GlobalStyle;
