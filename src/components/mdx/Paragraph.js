import styled from "styled-components";
import { theme } from "styled-tools";

const Paragraph = styled.p`
  font-size: 21px;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${theme("textColor")};
  font-family: ${theme("textFontFamily")};
`;

export default Paragraph;
