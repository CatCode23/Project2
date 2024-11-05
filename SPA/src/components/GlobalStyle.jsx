import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    height: 100vh;
    background-image: url('/images/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;