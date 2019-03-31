import styled from "styled-components";
import { theme } from "styled-tools";

import Paragraph from "./Paragraph";

const BaseBlockquote = styled.blockquote`
  margin: 20px 0;
  padding: 10px 20px;
  border-left: 7px solid rgba(255, 255, 255, 0.06);
  background: #020202;
  font-style: italic;
  font-family: "PT Serif", serif;
  color: ${theme("opaqueTextColor")};
  border-radius: 0 5px 5px 0;

  ${Paragraph} {
    color: ${theme("opaqueTextColor")};
  }
`;

const Blockquote = styled(BaseBlockquote)`
  /* nested blockquote has different styles */
  ${BaseBlockquote} {
    padding: 10px 15px;
    border-radius: 1px;
    border-left: none;
    font-style: normal;
    background: ${theme("bgColor")};

    ${Paragraph} {
      margin: 0;
      padding: 0;
      font-size: 16px;

      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export default Blockquote;
