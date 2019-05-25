import React from "react";
import styled, { css } from "styled-components";
import { theme, prop, ifProp } from "styled-tools";
import { MDXTag } from "@mdx-js/tag";
import SEO from "~/components/SEO";

const PostWrapper = styled.div`
  background: ${theme("bgColor")};
  color: white;
`;

const PostContainer = styled.div`
  padding: 0 15px;
  max-width: 850px;
  margin: 0 auto;
`;

const PostCover = styled.div`
  margin-bottom: 100px;
  position: relative;
  width: 100%;

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
      rgba(255, 255, 255, 0.5) 0%,
      ${theme("bgColor")} 100%
    );
  }

  > * {
    transform: scale(1);
  }
`;

const PostTitleWrapper = styled.div`
  padding: 60px 0;
`;

const PostAuthorWrapper = styled.div``;

const authors = {
  renatorib: {
    name: "Renato Ribeiro",
    avatar: "https://avatars2.githubusercontent.com/u/3277185?s=200",
    twitter: "@renatorib_"
  }
};

const Post = ({ children, meta }) => (
  <>
    <SEO {...meta} />
    <PostWrapper>
      <PostCover src={meta.image} color={meta.color}>
        <PostContainer>
          <PostTitleWrapper>
            <MDXTag name="h1">{meta.title}</MDXTag>
          </PostTitleWrapper>
          {authors[meta.author] && (
            <PostAuthorWrapper>
              <img src={authors[meta.author].avatar} width="50px" />
              {authors[meta.author].name}
              <br />
              {authors[meta.author].twitter}
              <br />
            </PostAuthorWrapper>
          )}
        </PostContainer>
      </PostCover>
      <PostContainer>{children}</PostContainer>
    </PostWrapper>
  </>
);

export default Post;
