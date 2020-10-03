import defaultTheme from "react-syntax-highlighter/dist/cjs/styles/prism/prism";
import { themeExtend } from "../utils/prism";

const extend = themeExtend(defaultTheme);

const theme = {
  titleFontFamily: '"PT Sans", sans-serif',
  textFontFamily: '"PT Serif", serif',
  codeFontFamily: '"Fira Code", Consolata, monospace',

  bgColor: "#ffffff",
  bgBlockColor: "#F3F8FB",
  titleColor: "#222",
  textColor: "#5b6987",
  opaqueTextColor: "#888",

  highlightColor: "lime",

  palette: {
    color: ["#000000", "#222222", "#444444"],
    background: ["#FFFFFF", "#F3F8FB", "#DFE4E7"]
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
      background: "#F3F8FB",
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
