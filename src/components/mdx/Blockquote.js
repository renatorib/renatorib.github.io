import React from "react";
import { Box } from "react-system";
import { useTheme } from "emotion-theming";

const Blockquote = props => {
  const { bgBlockColor, textFontFamily, opaqueTextColor, bgColor } = useTheme();

  return (
    <Box
      as="blockquote"
      className="blockquote"
      css={{
        margin: "20px 0",
        padding: "10px 20px",
        borderLeft: "7px solid rgba(0, 0, 0, 0.06)",
        background: bgBlockColor,
        fontStyle: "italic",
        fontFamily: textFontFamily,
        color: opaqueTextColor,
        borderRadius: "0 5px 5px 0",

        "& p": {
          color: opaqueTextColor
        },

        // nested blockquote have different styles
        "& .blockquote": {
          padding: "10px 15px",
          borderRadius: "1px",
          borderLeft: "none",
          fontStyle: "normal",
          background: bgColor,

          "& p": {
            margin: 0,
            padding: 0,
            fontSize: "16px",
            "&:first-of-type": {
              marginTop: 0
            },
            "&:last-of-type": {
              marginBottom: 0
            }
          }
        }
      }}
      {...props}
    />
  );
};

export default Blockquote;
