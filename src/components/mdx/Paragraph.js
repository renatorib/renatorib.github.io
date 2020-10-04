import React from "react";
import { useTheme } from "emotion-theming";
import { Box } from "react-system";

import { Alert } from "./Alert";

const customComponents = {
  Alert
};

const Paragraph = props => {
  const { textColor, textFontFamily } = useTheme();

  // This is a workaround to acess custom components using mdx
  // with the --> start string
  // e.g.: -->[Component prop1=value,prop2=value]
  if (
    typeof props.children[0] === "string" &&
    props.children[0].startsWith("-->")
  ) {
    const [, description, ...children] = props.children;
    const [componentName, ...propsRaw] = description
      .replace(/\[/g, "")
      .replace(/\]/g, "")
      .split(" ");

    const propsToPass = propsRaw
      .join(" ")
      .split(",")
      .map(propRaw => propRaw.split("="))
      .reduce((acc, prop) => ({ ...acc, [prop[0]]: prop[1] }), {});

    if (customComponents[componentName]) {
      const Component = customComponents[componentName];
      return <Component {...propsToPass}>{children}</Component>;
    }
  }

  return (
    <Box
      as="p"
      className="paragraph"
      {...props}
      css={{
        fontSize: "21px",
        lineHeight: "1.6em",
        letterSpacing: "0.5px",
        fontWeight: "400",
        color: textColor,
        fontFamily: textFontFamily
      }}
    />
  );
};

export default Paragraph;
