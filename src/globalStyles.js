import { createGlobalStyle } from 'styled-components';

const backgroundColor = '#004E00';
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${backgroundColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  }
  button {
    font-size: 2rem;
  }
  h1 {
    font-size: 4rem;
  }
  label {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
