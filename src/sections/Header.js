import React from "react";
import Link from "next/link";
import { Box, Flex } from "react-system";
import { useTheme } from "emotion-theming";
import { LogoIcon } from "~/components/LogoIcon";
import { Container } from "~/components/Container";

const HeaderLink = props => (
  <a
    css={{
      fontSize: 12,
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: 1,
      padding: "2px 10px"
    }}
    {...props}
  />
);

export const Header = ({ size = "small", background = "transparent" }) => {
  const { titleFontFamily, titleColor, textColor } = useTheme();

  return (
    <>
      <Box css={{ background, padding: "20px 0", fontFamily: titleFontFamily }}>
        <Container>
          <Flex alignItems="center">
            <Link href="/blog" passHref>
              <Box
                as="a"
                css={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: titleColor,
                  transition: "opacity 200ms ease",
                  willChange: "opacity",
                  "&:hover": {
                    opacity: 0.75
                  }
                }}
              >
                <LogoIcon size={size === "large" ? 50 : 25} />
                <Box
                  as="span"
                  pl="10px"
                  css={{
                    fontSize: size === "large" ? 22 : 18,
                    lineHeight: "1em"
                  }}
                >
                  rena.to
                  {size === "large" ? <br /> : null}
                  <strong>/blog</strong>
                </Box>
              </Box>
            </Link>

            <Flex ml="auto" css={{ color: textColor }}>
              <Link href="/blog/tag/tutorial" passHref>
                <HeaderLink>Tutorial</HeaderLink>
              </Link>
              <Link href="/blog/tag/javascript" passHref>
                <HeaderLink>JavaScript</HeaderLink>
              </Link>
              <Link href="/blog/tag/react" passHref>
                <HeaderLink>React</HeaderLink>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
