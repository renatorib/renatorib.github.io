import React from "react";
import { Box } from "react-system";

export const Container = props => {
  return (
    <Box
      css={{ margin: "0 auto", maxWidth: "850px", padding: "0 15px" }}
      {...props}
    />
  );
};
