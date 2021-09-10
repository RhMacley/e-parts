import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Rubik:wght@400;700;800;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    background: 	#FAF9F6;
    font: 400 16px Roboto, sans-serif;
  }
`;
export default GlobalStyle;