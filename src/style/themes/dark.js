import defaultTheme from "react-syntax-highlighter/dist/styles/prism/atom-dark";

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
    'pre[class*="language-"]': {
      ...defaultTheme['pre[class*="language-"]'],
      textShadow: "none",
      background: "#020202",
      borderRadius: "4px",
      fontFamily: "Fira Code, Consolata, monospace"
    },
    'code[class*="language-"]': {
      ...defaultTheme['code[class*="language-"]'],
      fontFamily: "Fira Code, Consolata, monospace",
      textShadow: "none"
    },
    "class-name": {
      ...defaultTheme["class-name"],
      textDecoration: "none"
    }
  }
};

export default theme;
