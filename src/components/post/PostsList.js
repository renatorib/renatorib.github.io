import React from "react";
import { useTheme } from "emotion-theming";
import { Flex, Box } from "react-system";
import Link from "next/link";

import { Grid } from "~/components/Grid";
import { PostTeaser } from "./PostTeaser";

export const PostsList = ({ title, posts = [] }) => {
  const { titleFontFamily } = useTheme();

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        css={{ padding: "60px 0 20px 0" }}
      >
        <Box
          css={{
            fontSize: 18,
            fontFamily: titleFontFamily,
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: "bold"
          }}
        >
          {title}
        </Box>
        <Link href="/blog/tag" passHref>
          <Box
            as="a"
            css={{
              fontSize: 14,
              fontFamily: titleFontFamily,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: "bold",
              opacity: 0.4
            }}
          >
            Browse tags →
          </Box>
        </Link>
      </Flex>
      <Grid gap="20px">
        {posts.map(post => (
          <PostTeaser key={post.mdx.meta.title} {...post} />
        ))}
      </Grid>
    </>
  );
};
