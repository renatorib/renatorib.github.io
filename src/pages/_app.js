import React from "react";
import App, { Container } from "next/app";
import { MDXProvider } from "@mdx-js/tag";
import * as components from "~/components/mdx";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <MDXProvider components={{ ...components }}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    );
  }
}
