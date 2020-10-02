import React from "react";
import { Box } from "react-system";

const Image = props => (
  <Box as="img" css={{ margin: "0 auto", maxWidth: "100%" }} {...props} />
);

export default Image;
