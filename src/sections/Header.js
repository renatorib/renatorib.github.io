import React from "react";
import { Box, Flex } from "react-system";
import { LogoIcon } from "~/components/LogoIcon";

export const Header = props => {
  return (
    <Box css={{ background: "#4B4C61" }} {...props}>
      <Flex>
        <LogoIcon />
        <Box>rena.to</Box>
      </Flex>
    </Box>
  );
};
