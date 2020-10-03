import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

const GlobalStyle = () => {
  const { highlightColor, textColor, bgColor, textFontFamily } = useTheme();

  return (
    <Global
      styles={css`
        *::selection {
          color: black;
          background: ${highlightColor};
        }

        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }

        body {
          color: ${textColor};
          background: ${bgColor};
          font-family: ${textFontFamily};
          min-height: 100vh;
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
