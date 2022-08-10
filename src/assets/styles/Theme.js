import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colour: {
    base: '#D1D2D4',
    light: '#f0f0f2',
    lightGrey: '#BABDBF',
    darkGrey: '#585959',
    almostBlack: '#262521',
    primary: '#f2c4bf',
    secondary: '#d9adad',
  },
  font: {
    display: "'Jost', Helvetica, Arial, sans-serif",
    text: "'Lato', Helvetica, Arial, sans-serif",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
