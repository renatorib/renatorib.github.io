import React from "react";
import Link from "next/link";
import { Box } from "react-system";
import { LogoIcon } from "~/components/LogoIcon";
import { useTheme } from "emotion-theming";

export const Header = ({ size = "large", background = "#4B4C61" }) => {
  const { titleFontFamily } = useTheme();

  return (
    <>
      <Box css={{ background, padding: "20px 0" }}>
        <Box css={{ margin: "0 auto", maxWidth: "850px" }}>
          <Link href="/blog" passHref>
            <Box
              as="a"
              css={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                transition: "color 200ms ease",
                "&:hover": {
                  color: "rgba(255, 255, 255, 0.7)"
                }
              }}
            >
              <LogoIcon size={size === "large" ? 80 : 40} />
              <Box
                pl="10px"
                css={{
                  fontSize: size === "large" ? 22 : 18,
                  fontFamily: titleFontFamily
                }}
              >
                rena.to
                {size === "large" ? <br /> : null}
                <strong>/blog</strong>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};
