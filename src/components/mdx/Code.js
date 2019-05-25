import styled from "styled-components";
import { theme } from "styled-tools";

const Code = styled.code`
  font-size: 0.8em;
  padding: 5px 8px;
  border-radius: 2px;
  background: ${theme("bgBlockColor")};
  font-family: ${theme("codeFontFamily")};
`;

export default Code;
