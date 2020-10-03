import React from "react";
import Link from "next/link";
import format from "date-fns/format";
import { Box } from "react-system";
import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";

export const PostTeaser = ({ slug, mdx }) => {
  const { titleFontFamily, bgBlockColor } = useTheme();

  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`} passHref>
      <motion.div key={mdx.meta.title} layoutId={`post-cover-${slug}`}>
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
            {mdx.meta.title}
          </Box>
          {mdx.meta.subtitle && (
            <Box css={{ marginTop: 10, fontSize: 22 }}>{mdx.meta.subtitle}</Box>
          )}
          <Box
            css={{
              opacity: 0.8,
              marginTop: 30,
              color: "#a8adbe",
              fontFamily: titleFontFamily,
              fontSize: 14
            }}
          >
            <Box as="span" css={{ color: "#2f3646", paddingRight: 8 }}>
              <time dateTime={mdx.meta.date}>
                {format(mdx.meta.date, "MMM D, YYYY")}
              </time>
            </Box>
            <Box as="span" css={{ color: "#a8adbe" }}>
              by {mdx.meta.author.name}
            </Box>
          </Box>
          {mdx.meta.tags && (
            <Box css={{ marginTop: 20, fontFamily: titleFontFamily }}>
              {mdx.meta.tags.map(tagName => (
                <TagPill key={tagName} name={tagName} />
              ))}
            </Box>
          )}
        </Box>
      </motion.div>
    </Link>
  );
};

const TagPill = ({ name }) => {
  return (
    <Link href={`/blog/tag/[name]`} as={`/blog/tag/${name}`} passHref>
      <Box
        as="a"
        css={{
          border: "1px solid #dcdfe9",
          borderRadius: "999px",
          padding: "2px 10px",
          marginRight: 5,
          fontSize: 12,
          opacity: 0.7,
          transition: "all 150ms ease",
          "&:hover": {
            borderColor: "#a5a9b6",
            opacity: 1
          }
        }}
      >
        {name}
      </Box>
    </Link>
  );
};
