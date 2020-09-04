import defaultTheme from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { themeExtend } from "../utils/prism";

const extend = themeExtend(defaultTheme);

const theme = {
  titleFontFamily: "PT Sans, sans-serif",
  textFontFamily: "PT Serif, serif",
  codeFontFamily: "Fira Code, Consolata, monospace",

  bgColor: "#000000",
  bgBlockColor: "#030303",
  titleColor: "#FFFFFF",
  textColor: "#AAAAAA",
  opaqueTextColor: "#777777",

  highlightColor: "lime",

  prism: {
    ...defaultTheme,
    ...extend('pre[class*="language-"]', {
      textShadow: "none",
      background: "#020202",
      borderRadius: "4px",
      fontFamily: "Fira Code, Consolata, monospace"
    }),
    ...extend('code[class*="language-"]', {
      fontFamily: "Fira Code, Consolata, monospace",
      textShadow: "none"
    }),
    ...extend("class-name", {
      textDecoration: "none"
    })
  }
};

export default theme;
