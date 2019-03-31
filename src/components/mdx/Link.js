import styled from "styled-components";
import { theme } from "styled-tools";

const Link = styled.a`
  text-decoration: none;
  transition: all 300ms ease;

  &,
  &:visited {
    color: white;
  }

  &:hover {
    color: ${theme("highlightColor")};
  }
`;

export default Link;
