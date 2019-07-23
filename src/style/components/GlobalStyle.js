import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

const GlobalStyle = createGlobalStyle`
  *::selection {
    color: black;
    background: ${theme("highlightColor")};
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    color: ${theme("textColor")};
    background: ${theme("bgColor")};
    font-family: ${theme("textFontFamily")};
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
