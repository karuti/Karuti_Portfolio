"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #152314;
    --foreground: #F6F3E1;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #152314;
      --foreground: #F6F3E1;
    }
  }

  body {
    color: var(--foreground);
    background: var(--background);
    font-family: 'DM Sans', Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;