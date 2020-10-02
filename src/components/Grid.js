import React from "react";
import { Box } from "react-system";

export const Grid = ({ columns = "1fr", rows, gap, css = {}, ...rest }) => (
  <Box
    css={{
      display: "grid",
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridGap: gap,
      ...css
    }}
    {...rest}
  />
);
