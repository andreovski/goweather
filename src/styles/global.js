import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main: #FF4831;
    --background: #F2F3F5;
    --font: #363636;

    --white: #FDFAF7;

    --gray-300: #EBECEF;
    --gray-400: #DCDFE4;
    --gray-600: #909090;

    --red-100: #FF6A55; 
    --red-700: #E92C16;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px;
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;
