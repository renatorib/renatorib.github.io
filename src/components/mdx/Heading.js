import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import slugify from "@sindresorhus/slugify";

export const Heading1 = styled.h1`
  font-size: 60px;
  font-weight: 100;
  color: ${theme("titleColor")};
  font-family: ${theme("titleFontFamily")};
`;

const HeadingAnchor = styled.a`
  position: absolute;
  left: -26px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.05);
  transition: color 300ms ease;
  user-select: none;
`;

const HeadingGeneric = styled.h2`
  position: relative;
  font-weight: 100;
  color: ${theme("titleColor")};
  font-family: ${theme("titleFontFamily")};

  &:hover ${HeadingAnchor} {
    color: lime;
  }
`;

const HeadingWithAnchor = ({ h = "h2", children, ...props }) => (
  <HeadingGeneric {...props} as={h} id={slugify(children)}>
    <HeadingAnchor href={`#${slugify(children)}`}>#</HeadingAnchor>
    {children}
  </HeadingGeneric>
);

export const Heading2 = styled(HeadingWithAnchor).attrs({ h: "h2" })`
  font-size: 36px;
`;

export const Heading3 = styled(HeadingWithAnchor).attrs({ h: "h3" })`
  font-size: 30px;
`;

export const Heading4 = styled(HeadingWithAnchor).attrs({ h: "h4" })`
  font-size: 26px;
`;

export const Heading5 = styled(HeadingWithAnchor).attrs({ h: "h5" })`
  font-size: 21px;
`;

export const Heading6 = styled(HeadingWithAnchor).attrs({ h: "h6" })`
  font-size: 18px;
`;
