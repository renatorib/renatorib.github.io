import React from "react";
import Link from "next/link";

import format from "date-fns/format";
import { motion } from "framer-motion";
import { Box, Flex } from "react-system";
import { Header } from "~/sections/Header";
import { Footer } from "~/sections/Footer";
import { Grid } from "~/components/Grid";

import posts from "~/data/posts";

const PostTeaser = React.forwardRef(({ image, children, ...rest }, ref) => (
  <Box
    as="a"
    css={{
      zIndex: 0,
      display: "block",
      cursor: "pointer",
      overflow: "hidden",
      borderRadius: "3px",

      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      transition: "all 200ms ease",
      opacity: 0.95,
      willChange: "transform, box-shadow",

      "&:hover": {
        opacity: 1,
        transform: "translateY(-5px)",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)"
      }
    }}
    ref={ref}
    {...rest}
  >
    <Box
      css={{
        zIndex: -2,
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <Box
        css={{
          zIndex: -1,
          background: `linear-gradient(
          to bottom,
          rgba(0, 30, 0, 0.5) 0%,
          rgba(0, 30, 30, 0.5) 100%
        )`
        }}
      >
        <Box p="30px">{children}</Box>
      </Box>
    </Box>
  </Box>
));

const Blog = () => (
  <>
    <Header />
    <Box css={{ margin: "0 auto", maxWidth: "850px" }}>
      <Box
        css={{
          fontSize: 28,
          fontFamily: "PT Sans, sans-serif",
          padding: "20px 0"
        }}
      >
        Latest Posts
      </Box>
      <Grid gap="10px">
        {posts.map(post => (
          <motion.div
            key={post.mdx.meta.title}
            layoutId={`post-cover-${post.mdx.meta.datetime}`}
          >
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <PostTeaser image={post.mdx.meta.image}>
                <Box
                  css={{
                    fontSize: 36,
                    color: "white",
                    fontFamily: "PT Sans, sans-serif"
                  }}
                >
                  {post.mdx.meta.title}
                </Box>
                <Box css={{ opacity: 0.8, marginTop: 20 }}>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    css={{ fontFamily: "PT Sans, sans-serif" }}
                  >
                    <Box css={{ color: "white", fontWeight: "bold" }}>
                      {post.mdx.meta.author.name}
                    </Box>
                    <Box css={{ color: "white" }}>
                      <time dateTime={post.mdx.meta.date}>
                        {format(post.mdx.meta.date, "MMM D, YYYY")}
                      </time>
                    </Box>
                  </Flex>
                </Box>
              </PostTeaser>
            </Link>
          </motion.div>
        ))}
      </Grid>
    </Box>
    <Footer />
  </>
);

export default Blog;
