import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.color.background};
  font-family: 'Inter', sans-serif;
  margin-top: 32px;
  margin-bottom: 32px;
}

`;
