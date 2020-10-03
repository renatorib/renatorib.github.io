import React from "react";
import { Header } from "~/sections/Header";
import { Footer } from "~/sections/Footer";
import { Container } from "~/components/Container";
import SEO from "~/components/SEO";

import { getAllPostsByTag } from "~/data/posts";
import { PostsList } from "~/components/post/PostsList";

const Tag = ({ slug }) => {
  return (
    <>
      <SEO
        title={`${slug} - rena.to`}
        description="Renato Ribeiro, Software Engineer."
      />
      <Header />
      <Container>
        <PostsList posts={getAllPostsByTag(slug)} title={`Tag: ${slug}`} />
      </Container>
      <Footer />
    </>
  );
};

Tag.getInitialProps = ctx => ({ slug: ctx.query.slug });

export default Tag;
