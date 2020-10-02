import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";
import { Box, useSystem } from "react-system";
import { Header } from "~/sections/Header";
import * as mdx from "~/components/mdx";
import SEO from "~/components/SEO";

import PostAuthor from "~/components/post/PostAuthor";

const Container = ({ ...rest }) => {
  return (
    <Box
      css={{
        position: "relative",
        padding: "0 15px",
        maxWidth: "850px",
        margin: "0 auto"
      }}
      {...rest}
    />
  );
};

const Cover = ({ src, color, children, ...rest }) => {
  const { media } = useSystem();

  return (
    <Box css={media({ marginBottom: ["40px", "60px"] })}>
      <motion.div
        css={{
          ...(src
            ? {
                background: `url(${src}) center center`,
                backgroundSize: "cover"
              }
            : {
                background: color ?? "black"
              })
        }}
        {...rest}
      >
        <Box
          css={{
            background: `linear-gradient(
              to bottom,
              rgba(0, 30, 0, 0.5) 0%,
              rgba(0, 30, 30, 0.5) 100%
            )`
          }}
        >
          {children}
        </Box>
      </motion.div>
    </Box>
  );
};

const Post = ({ children, meta = {} }) => {
  const { bgColor } = useTheme();
  const { media } = useSystem();

  return (
    <>
      <SEO {...meta} />
      <Box css={{ background: bgColor, color: "white" }}>
        <Cover
          src={meta.image}
          color={meta.color}
          layoutId={`post-cover-${meta.datetime}`}
        >
          <Header size="small" background="transparent" />

          <Container>
            <Box css={media({ padding: ["20px 0 40px 0", "40px 0 100px 0"] })}>
              <mdx.h1 css={{ margin: 0, color: "white" }}>{meta.title}</mdx.h1>
            </Box>
            {meta.author && (
              <Box css={{ paddingBottom: "40px" }}>
                <PostAuthor {...meta.author} date={meta.date} />
              </Box>
            )}
          </Container>
        </Cover>
        <Container>{children}</Container>
        <Container>
          <mdx.p>
            Don’t forget to follow me on{" "}
            <mdx.a href="https://twitter.com/renatorib_" target="_blank">
              twitter
            </mdx.a>{" "}
            and{" "}
            <mdx.a href="https://github.com/renatorib" target="_blank">
              github
            </mdx.a>
            .
          </mdx.p>
        </Container>
        <Box
          css={{
            background: "rgba(0, 0, 0, 0.05)",
            color: "#888",
            padding: "30px 0",
            marginTop: "30px",
            fontSize: "20px"
          }}
        >
          <Container>
            © 2019-present Renato Ribeiro. All Rights Reserved.
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Post;
