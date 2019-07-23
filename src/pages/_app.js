import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "~/style/themes/light";
import GlobalStyle from "~/style/components/GlobalStyle";
import SEO from "~/components/SEO";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <SEO
              title="@renatorib"
              description="Renato Ribeiro; Software Engineer."
            />
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
