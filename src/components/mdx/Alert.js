import React from "react";
import { Box } from "react-system";
import { useTheme } from "emotion-theming";

const bgs = {
  info: "#ecf6fb",
  warning: "#fbfaec",
  danger: "#fbecec",
  success: "#ecfbf2"
};

export const Alert = ({ type = "info", ...props }) => {
  const { textColor, titleColor } = useTheme();

  return (
    <Box
      css={{
        background: bgs[type],
        color: textColor,
        borderRadius: 5,
        padding: "30px",
        fontSize: 22,
        "& strong": {
          color: titleColor
        }
      }}
      {...props}
    />
  );
};
