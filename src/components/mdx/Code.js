import React from "react";
import { useTheme } from "emotion-theming";
import { Box } from "react-system";

const Code = props => {
  const { bgBlockColor, codeFontFamily } = useTheme();

  return (
    <Box
      as="code"
      css={{
        fontSize: "0.8em",
        padding: "5px 8px",
        background: bgBlockColor,
        fontFamily: codeFontFamily
      }}
      {...props}
    />
  );
};

export default Code;
