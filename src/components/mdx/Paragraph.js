import React from "react";
import { useTheme } from "emotion-theming";
import { Box } from "react-system";

const Paragraph = props => {
  const { textColor, textFontFamily } = useTheme();

  return (
    <Box
      as="p"
      className="paragraph"
      {...props}
      css={{
        fontSize: "21px",
        lineHeight: "1.6em",
        letterSpacing: "0.5px",
        fontWeight: "400",
        color: textColor,
        fontFamily: textFontFamily
      }}
    />
  );
};

export default Paragraph;
