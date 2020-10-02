import React from "react";
import slugify from "@sindresorhus/slugify";
import { Box, useSystem } from "react-system";
import { useTheme } from "emotion-theming";

export const Heading1 = ({ ...props }) => {
  const { titleColor, titleFontFamily } = useTheme();
  const { media } = useSystem();

  return (
    <Box
      as="h1"
      css={media({
        fontSize: [32, 60],
        fontWeight: 100,
        color: titleColor,
        fontFamily: titleFontFamily
      })}
      {...props}
    />
  );
};

const HeadingAnchor = props => (
  <a
    className="heading-anchor"
    {...props}
    css={{
      position: "absolute",
      left: "-26px",
      textDecoration: "none",
      color: "rgba(255, 255, 255, 0.05)",
      transition: "color 300ms ease",
      userSelect: "none",
      ...props.css
    }}
  />
);

const HeadingGeneric = props => {
  const { titleColor, highlightColor, titleFontFamily } = useTheme();

  return (
    <Box
      as="h2"
      {...props}
      css={{
        position: "relative",
        fontWeight: "bold",
        color: titleColor,
        fontFamily: titleFontFamily,
        "&:hover .heading-anchor": {
          color: highlightColor
        },
        ...props.css
      }}
    />
  );
};

const headingWithAnchorFactory = (h, style = {}) => ({
  children,
  ...props
}) => (
  <HeadingGeneric as={h} {...props} css={style} id={slugify(children)}>
    <HeadingAnchor href={`#${slugify(children)}`}>#</HeadingAnchor>
    {children}
  </HeadingGeneric>
);

export const Heading2 = headingWithAnchorFactory("h2", { fontSize: 36 });
export const Heading3 = headingWithAnchorFactory("h3", { fontSize: 30 });
export const Heading4 = headingWithAnchorFactory("h4", { fontSize: 26 });
export const Heading5 = headingWithAnchorFactory("h5", { fontSize: 21 });
export const Heading6 = headingWithAnchorFactory("h6", { fontSize: 18 });
