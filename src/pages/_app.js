import React from "react";
import App, { Container } from "next/app";
import { MDXProvider } from "@mdx-js/tag";
import { ThemeProvider } from "styled-components";

import * as components from "~/components/mdx";
import dark from "~/style/themes/dark";
import GlobalStyle from "~/style/components/GlobalStyle";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={dark}>
          <MDXProvider components={{ ...components }}>
            <>
              <GlobalStyle />
              <Component {...pageProps} />
            </>
          </MDXProvider>
        </ThemeProvider>
      </Container>
    );
  }
}
