import React from "react";
import format from "date-fns/format";
import { motion } from "framer-motion";
import { useTheme } from "emotion-theming";
import { Box, Flex, useSystem } from "react-system";
import { MDXProvider } from "@mdx-js/tag";
import { Header } from "~/sections/Header";
import { Container } from "~/components/Container";
import posts from "~/data/posts";
import * as mdx from "~/components/mdx";
import { Alert } from "~/components/mdx/Alert";
import SEO from "~/components/SEO";
import twitterIcon from "~/images/twitter-icon.png";
import Error from "~/pages/_error";

const Cover = ({ color, children, ...rest }) => {
  const { bgBlockColor } = useTheme();
  const { media } = useSystem();

  return (
    <Box css={media({ marginBottom: ["40px", "60px"] })}>
      <motion.div
        css={{
          background: color ?? bgBlockColor
        }}
        {...rest}
      >
        {children}
      </motion.div>
    </Box>
  );
};

const PostAuthor = ({ avatar, name, profiles, date, ...props }) => {
  const { textColor } = useTheme();

  return (
    <Flex
      css={{
        borderRadius: "99px",
        color: textColor,
        fontFamily: "PT Sans, sans-serif",
        padding: "2px"
      }}
      {...props}
    >
      {avatar && (
        <img
          src={avatar}
          css={{
            maxWidth: "100%",
            borderRadius: "999px",
            width: "60px",
            height: "60px",
            border: "2px solid transparent",
            marginRight: "20px"
          }}
        />
      )}
      <Flex flexDirection="column" justifyContent="center">
        <div css={{ fontWeight: "bold" }}>
          <a href={profiles[0].url} rel="noopener noreferrer" target="_blank">
            {name}
            <img
              src={twitterIcon}
              css={{
                display: "inline",
                height: 11,
                paddingLeft: 5
              }}
            />
          </a>
        </div>
        {date ? (
          <div>
            <time dateTime={date}>{format(date, "MMM D, YYYY")}</time>
          </div>
        ) : (
          <div>Unknown date</div>
        )}
      </Flex>
    </Flex>
  );
};

const findComponentFromSlug = slug => {
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    MDXComponent: post.mdx.default,
    mdxComponentProps: {
      ...post.mdx,
      default: undefined
    }
  };
};

const Post = ({ slug }) => {
  const { bgColor, textColor, titleColor } = useTheme();
  const { media } = useSystem();

  const { MDXComponent, mdxComponentProps } = findComponentFromSlug(slug);

  if (!MDXComponent) {
    return <Error />;
  }

  const {
    image,
    color,
    date,
    title,
    subtitle,
    author,
    outdated
  } = mdxComponentProps?.meta;

  return (
    <>
      <SEO title={title} description={subtitle} image={image} date={date} />
      <MDXProvider components={{ ...mdx, h1: () => null }}>
        <Box css={{ background: bgColor, color: "white" }}>
          <Cover src={image} color={color} layoutId={`post-cover-${slug}`}>
            <Header />

            <Container>
              <Box
                css={media({ padding: ["40px 0 60px 0", "80px 0 100px 0"] })}
              >
                <mdx.h1 css={{ margin: 0, color: titleColor }}>{title}</mdx.h1>
                <div
                  css={media({
                    fontSize: [22, 26],
                    paddingTop: 20,
                    color: textColor
                  })}
                >
                  {subtitle}
                </div>
              </Box>
              {author && (
                <Box css={media({ paddingBottom: ["20px", "40px"] })}>
                  <PostAuthor {...author} date={date} />
                </Box>
              )}
            </Container>
          </Cover>

          {outdated && (
            <Container>
              <Alert type="warning">
                <strong>Be aware.</strong> This post is very old and some things
                may be out of date.
              </Alert>
              <mdx.hr />
            </Container>
          )}

          {/* Blog body content */}
          <Container css={{ "& img": { maxWidth: "100%" } }}>
            <MDXComponent />
          </Container>

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
              color: textColor,
              padding: "30px 0",
              marginTop: "40px",
              fontSize: "16px"
            }}
          >
            <Container>
              © 2019-present Renato Ribeiro. All Rights Reserved.
            </Container>
          </Box>
        </Box>
      </MDXProvider>
    </>
  );
};

Post.getInitialProps = ctx => ({ slug: ctx.query.slug });

export default Post;
