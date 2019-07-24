import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { theme, prop, ifProp } from "styled-tools";
import UILink from "~/components/mdx/Link";
import { Heading1 } from "~/components/mdx/Heading";
import SEO from "~/components/SEO";

import PostAuthor from "~/components/molecules/PostAuthor";

const PostWrapper = styled.div`
  background: ${theme("bgColor")};
  color: white;
`;

const PostContainer = styled.div`
  position: relative;
  padding: 0 15px;
  max-width: 850px;
  margin: 0 auto;
`;

const PostCover = styled.div`
  margin-bottom: 100px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  ${ifProp(
    "src",
    css`
      background: url(${prop("src")}) center center;
      background-size: cover;
    `,
    css`
      background: ${prop("color", "black")};
    `
  )}

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 30, 0, 0.5) 0%,
      rgba(0, 30, 30, 0.5) 100%
    );
  }
`;

const PostHeader = styled.div`
  padding: 20px 0;
`;

const PostTitle = styled(Heading1)`
  padding: 40px 0 100px 0;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    padding: 20px 0 40px 0;
  }
`;

const PostAuthorWrapper = styled.div`
  padding-bottom: 40px;
`;

const NegativeLink = styled(UILink)`
  font-weight: bold;

  &,
  &:visited {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Post = ({ children, meta = {} }) => (
  <>
    <SEO {...meta} />
    <PostWrapper>
      <PostCover src={meta.image} color={meta.color}>
        <PostHeader>
          <PostContainer>
            <Link href="/blog" passHref>
              <NegativeLink>@renatorib/blog</NegativeLink>
            </Link>
          </PostContainer>
        </PostHeader>

        <PostContainer>
          <PostTitle>{meta.title}</PostTitle>
          {meta.author && (
            <PostAuthorWrapper>
              <PostAuthor {...meta.author} date={meta.date} />
            </PostAuthorWrapper>
          )}
        </PostContainer>
      </PostCover>
      <PostContainer>{children}</PostContainer>
    </PostWrapper>
  </>
);

export default Post;
