import React from "react";
import { useTheme } from "emotion-theming";
import { Box } from "react-system";

import { Grid } from "~/components/Grid";
import { PostTeaser } from "./PostTeaser";

export const PostsList = ({ title, posts = [] }) => {
  const { titleFontFamily } = useTheme();

  return (
    <>
      <Box
        css={{
          fontSize: 18,
          fontFamily: titleFontFamily,
          padding: "40px 0",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: "bold"
        }}
      >
        {title}
      </Box>
      <Grid gap="20px">
        {posts.map(post => (
          <PostTeaser key={post.mdx.meta.title} {...post} />
        ))}
      </Grid>
    </>
  );
};
