import React from "react";
import Link from "next/link";
import format from "date-fns/format";
import { Box } from "react-system";
import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";

export const PostTeaser = ({
  slug,
  title,
  subtitle,
  author,
  date,
  datetime
}) => {
  const { titleFontFamily, bgBlockColor } = useTheme();

  return (
    <motion.div key={title} layoutId={`post-cover-${slug}`}>
      <Link href="/blog/[slug]" as={`/blog/${slug}`} passHref>
        <Box
          as="a"
          css={{
            zIndex: 0,
            display: "block",
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "3px",
            padding: "30px",

            background: bgBlockColor,
            transition: "all 200ms ease",
            opacity: 0.95,
            willChange: "transform, box-shadow, border-color",

            "&:hover": {
              opacity: 1,
              transform: "translateY(-5px)",
              boxShadow: "0 5px 10px rgba(10, 25, 90, 0.1)",
              borderColor: "transparent"
            }
          }}
        >
          <Box
            css={{
              fontSize: 32,
              fontFamily: titleFontFamily,
              color: "#2f3646"
            }}
          >
            {title}
          </Box>
          {subtitle && (
            <Box css={{ marginTop: 10, fontSize: 22 }}>{subtitle}</Box>
          )}
          <Box
            css={{
              opacity: 1,
              marginTop: 30,
              color: "#a8adbe",
              fontFamily: titleFontFamily,
              fontSize: 14
            }}
          >
            <span css={{ fontWeight: "bold" }}>
              <time dateTime={datetime}>{format(date, "MMM D, YYYY")}</time>
            </span>
            <span> by {author.name}</span>
          </Box>
        </Box>
      </Link>
    </motion.div>
  );
};
