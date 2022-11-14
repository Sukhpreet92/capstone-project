import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #0c2c4d;
          --background-primary: rgb(255,255,255);
          --box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
          --font-size: 1.2rem;
        
      }
      
      /* noto-sans-regular - latin */
      @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
             url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
             url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      
      * {
        margin: 0;
        padding: 0;
          box-sizing: border-box;
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
      }
  `;

export default GlobalStyle;
