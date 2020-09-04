import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { theme, prop, ifProp } from "styled-tools";
import * as mdx from "~/components/mdx";
import SEO from "~/components/SEO";

import PostAuthor from "~/components/post/PostAuthor";

const Wrapper = styled.div`
  background: ${theme("bgColor")};
  color: white;
`;

const Container = styled.div`
  position: relative;
  padding: 0 15px;
  max-width: 850px;
  margin: 0 auto;
`;

const Cover = styled.div`
  margin-bottom: 60px;
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

const Header = styled.div`
  padding: 20px 0;
`;

const Title = styled(mdx.h1)`
  padding: 40px 0 100px 0;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    padding: 20px 0 40px 0;
  }
`;

const AuthorWrapper = styled.div`
  padding-bottom: 40px;
`;

const NegativeLink = styled(mdx.a)`
  font-weight: bold;

  &,
  &:visited {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Footer = styled.div`
  background: rgba(0, 0, 0, 0.05);
  color: #888;
  padding: 30px 0;
  margin-top: 30px;
  font-size: 20px;
`;

const Post = ({ children, meta = {} }) => (
  <>
    <SEO {...meta} />
    <Wrapper>
      <Cover src={meta.image} color={meta.color}>
        <Header>
          <Container>
            <Link href="/blog" passHref>
              <NegativeLink>@renatorib/blog</NegativeLink>
            </Link>
          </Container>
        </Header>

        <Container>
          <Title>{meta.title}</Title>
          {meta.author && (
            <AuthorWrapper>
              <PostAuthor {...meta.author} date={meta.date} />
            </AuthorWrapper>
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
      <Footer>
        <Container>
          © 2019-present Renato Ribeiro. All Rights Reserved.
        </Container>
      </Footer>
    </Wrapper>
  </>
);

export default Post;
