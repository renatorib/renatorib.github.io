import defaultTheme from "react-syntax-highlighter/dist/styles/prism/prism";
import { themeExtend } from "../utils/prism";

const extend = themeExtend(defaultTheme);

const theme = {
  titleFontFamily: "PT Sans, sans-serif",
  textFontFamily: "PT Serif, serif",
  codeFontFamily: "Fira Code, Consolata, monospace",

  bgColor: "#F8F8F8",
  bgBlockColor: "#EFEFEF",
  titleColor: "#222",
  textColor: "#666",
  opaqueTextColor: "#888",

  highlightColor: "lime",

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
      background: "#EFEFEF",
      borderRadius: "4px",
      fontFamily: "Fira Code, Consolata, monospace"
    }),
    ...extend('code[class*="language-"]', {
      fontFamily: "Fira Code, Consolata, monospace",
      textShadow: "none"
    })
  }
};

export default theme;
