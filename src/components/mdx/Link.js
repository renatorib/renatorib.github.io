import styled from "styled-components";
import { palette, theme } from "styled-tools";

const Link = styled.a`
  text-decoration: none;
  transition: all 300ms ease;

  &,
  &:visited {
    color: ${palette("color", 0)};
  }

  &:hover {
    color: ${theme("highlightColor")};
  }
`;

export default Link;
