import React from "react";
import { Box } from "react-system";
import { Container } from "~/components/Container";

export const Footer = props => {
  return (
    <Box css={{ padding: "20px 0" }} {...props}>
      <Container />
    </Box>
  );
};
