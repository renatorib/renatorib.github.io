import React from "react";
import { useTheme } from "emotion-theming";
import { Box } from "react-system";

const Code = props => {
  const { palette, codeFontFamily } = useTheme();

  return (
    <Box
      as="code"
      css={{
        fontSize: "0.8em",
        padding: "3px 8px",
        borderRadius: "2px",
        background: palette.background[2],
        fontFamily: codeFontFamily
      }}
      {...props}
    />
  );
};

export default Code;
