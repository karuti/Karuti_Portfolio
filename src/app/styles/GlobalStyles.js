"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Bold.woff2') format('woff2'),
         url('/fonts/GeneralSans-Bold.woff') format('woff'),
         url('/fonts/GeneralSans-Bold.eot');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Bolditalic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Bolditalic.woff') format('woff'),
         url('/fonts/GeneralSans-Bolditalic.eot');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Extralight.woff2') format('woff2'),
         url('/fonts/GeneralSans-Extralight.woff') format('woff'),
         url('/fonts/GeneralSans-Extralight.eot');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Extralightitalic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Extralightitalic.woff') format('woff'),
         url('/fonts/GeneralSans-Extralightitalic.eot');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Italic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Italic.woff') format('woff'),
         url('/fonts/GeneralSans-Italic.eot');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Light.woff2') format('woff2'),
         url('/fonts/GeneralSans-Light.woff') format('woff'),
         url('/fonts/GeneralSans-Light.eot');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Lightitalic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Lightitalic.woff') format('woff'),
         url('/fonts/GeneralSans-Lightitalic.eot');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Medium.woff2') format('woff2'),
         url('/fonts/GeneralSans-Medium.woff') format('woff'),
         url('/fonts/GeneralSans-Medium.eot');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Mediumitalic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Mediumitalic.woff') format('woff'),
         url('/fonts/GeneralSans-Mediumitalic.eot');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Regular.woff2') format('woff2'),
         url('/fonts/GeneralSans-Regular.woff') format('woff'),
         url('/fonts/GeneralSans-Regular.eot');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Semibold.woff2') format('woff2'),
         url('/fonts/GeneralSans-Semibold.woff') format('woff'),
         url('/fonts/GeneralSans-Semibold.eot');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Semibolditalic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Semibolditalic.woff') format('woff'),
         url('/fonts/GeneralSans-Semibolditalic.eot');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Variable.woff2') format('woff2'),
         url('/fonts/GeneralSans-Variable.woff') format('woff'),
         url('/fonts/GeneralSans-Variable.eot');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans';
    src: url('/fonts/GeneralSans-Variableitalic.woff2') format('woff2'),
         url('/fonts/GeneralSans-Variableitalic.woff') format('woff'),
         url('/fonts/GeneralSans-Variableitalic.eot');
    font-weight: normal;
    font-style: italic;
  }
  :root {
    --background: #152314;
  
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #152314;
   
    }
  }

  body {
    color: var(--foreground);
    background: var(--background);
    font-family: 'GeneralSans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    a{
    color:#B9B173;
    }
    h1{
  font-size:64px;
font-type:bold;
    color:#2c2c2c;
    line-height:1;
   
    }
    h2{
      font-size:32px;
font-type:bold;
    color:#2c2c2c;
    line-height:1.08;

  
    }
    p{
    color:#7D88A1;
    line-height:1.5;
    font-size:18px;
    }
`;

export default GlobalStyle;