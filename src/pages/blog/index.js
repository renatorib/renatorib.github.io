import React from "react";
import { Header } from "~/sections/Header";
import { Footer } from "~/sections/Footer";
import { Container } from "~/components/Container";
import SEO from "~/components/SEO";

import posts from "~/data/posts";
import { PostsList } from "~/components/post/PostsList";

const Blog = () => {
  return (
    <>
      <SEO
        title="blog - rena.to"
        description="Renato Ribeiro, Software Engineer."
      />
      <Header />
      <Container>
        <PostsList posts={posts} title={`recently published`} />
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
