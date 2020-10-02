import defaultTheme from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
import { themeExtend } from "../utils/prism";

const extend = themeExtend(defaultTheme);

const theme = {
  titleFontFamily: "PT Sans, sans-serif",
  textFontFamily: "PT Serif, serif",
  codeFontFamily: "Fira Code, Consolata, monospace",

  bgColor: "#F8F8F8",
  bgBlockColor: "#EEEEEE",
  titleColor: "#222",
  textColor: "#5b6987",
  opaqueTextColor: "#888",

  highlightColor: "lime",

  palette: {
    color: ["#000000", "#222222", "#444444"],
    background: ["#FFFFFF", "#F8F8F8", "#EEEEEE"]
  },

  prism: {
    ...defaultTheme,
    ...extend(
      [
        "operator",
        "entity",
        "url",
        ".language-css .token.string",
        ".style .token.string"
      ],
      {
        background: "none"
      }
    ),
    ...extend('pre[class*="language-"]', {
      textShadow: "none",
      background: "#EEEEEE",
      borderRadius: "4px",
      fontFamily: "Fira Code, Consolata, monospace",
      padding: "1em 0"
    }),
    ...extend('code[class*="language-"]', {
      fontFamily: "Fira Code, Consolata, monospace",
      textShadow: "none"
    })
  }
};

export default theme;
