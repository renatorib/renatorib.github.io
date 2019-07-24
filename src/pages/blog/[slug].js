import React, { Component } from "react";
import { MDXProvider } from "@mdx-js/tag";
import PostLayout from "~/layouts/Post";
import posts from "~/data/posts";
import * as mdxComponents from "~/components/mdx";

const findComponentFromSlug = slug => {
  const post = posts.find(p => p.slug === slug);
  console.log(slug);

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

class Post extends Component {
  static getInitialProps(ctx) {
    return { slug: ctx.query.slug };
  }

  render() {
    const { MDXComponent, mdxComponentProps } = findComponentFromSlug(
      this.props.slug
    );

    if (!MDXComponent) {
      return <div>Post not found</div>;
    }

    return (
      <MDXProvider components={{ ...mdxComponents, h1: () => null }}>
        <PostLayout {...mdxComponentProps}>
          <MDXComponent {...mdxComponentProps} />
        </PostLayout>
      </MDXProvider>
    );
  }
}

export default Post;
