import styled from "styled-components";
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  grid,
  background,
  border,
  position
} from "styled-system";

export const Box = styled("div")(
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
    grid,
    background,
    border,
    position
  )
);
