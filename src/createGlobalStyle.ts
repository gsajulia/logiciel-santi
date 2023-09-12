import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  html {
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale !important;
  }
`;

export default GlobalStyle;
