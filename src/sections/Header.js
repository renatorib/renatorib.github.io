import React from "react";
import Link from "next/link";
import { Box, Flex } from "react-system";
import { useTheme } from "emotion-theming";
import { LogoIcon } from "~/components/LogoIcon";
import { Container } from "~/components/Container";

export const Header = ({ size = "small", background = "transparent" }) => {
  const { titleFontFamily, titleColor } = useTheme();

  return (
    <>
      <Box css={{ background, padding: "20px 0", fontFamily: titleFontFamily }}>
        <Container>
          <Flex alignItems="center">
            <Link href="/" passHref>
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
                  <strong>rena.to</strong>
                </Box>
              </Box>
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
