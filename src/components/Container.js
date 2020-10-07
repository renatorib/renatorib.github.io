import React from "react";
import { Box } from "react-system";

export const Container = ({ size = 850, ...props }) => {
  return (
    <Box
      css={{ margin: "0 auto", maxWidth: size, padding: "0 15px" }}
      {...props}
    />
  );
};
