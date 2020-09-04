import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { prop, ifProp, theme } from "styled-tools";
import PostAuthor from "~/components/post/PostAuthor";

import posts from "~/data/posts";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: ${theme("titleFontFamily")};
  padding: 20px 0;
`;

const PostTeaser = styled.div`
  z-index: 0;
  padding: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 3px;

  &::before {
    z-index: -2;
    content: "";
    display: block;
    position: absolute;
    ${ifProp(
      "image",
      css`
        background: url(${prop("image")});
      `
    )}
    background-size: cover;
    background-position: center center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &::after {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 30, 0, 0.5) 0%,
      rgba(0, 30, 30, 0.5) 100%
    );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease;
  opacity: 0.95;
  will-change: transform, box-shadow;
  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const PostTitle = styled.div`
  font-size: 36px;
  color: white;
  font-family: ${theme("titleFontFamily")};
`;

const List = styled.div`
  > ${PostTeaser}:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const PostAuthorWrapper = styled.div`
  opacity: 0.8;
  margin-top: 20px;
`;

const Blog = () => (
  <Wrapper>
    <Title>Latest Posts</Title>
    <List>
      {posts.map(post => (
        <Link
          href="/blog/[slug]"
          as={`/blog/${post.slug}`}
          prefetch
          key={post.mdx.meta.title}
        >
          <PostTeaser image={post.mdx.meta.image} color={post.mdx.meta.color}>
            <PostTitle>{post.mdx.meta.title}</PostTitle>
            <PostAuthorWrapper>
              <PostAuthor
                {...post.mdx.meta.author}
                date={post.mdx.meta.date}
                avatar={null}
              />
            </PostAuthorWrapper>
          </PostTeaser>
        </Link>
      ))}
    </List>
  </Wrapper>
);

export default Blog;
