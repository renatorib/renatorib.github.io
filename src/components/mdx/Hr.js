import React from "react";
import { Box, useSystem } from "react-system";
import { useTheme } from "emotion-theming";

export const Hr = () => {
  const { media } = useSystem();
  const { palette } = useTheme();

  return (
    <Box
      as="hr"
      css={media({
        margin: ["25px 0", "60px 0"],
        border: "none",
        borderTop: `1px solid ${palette.background[2]}`
      })}
    />
  );
};
