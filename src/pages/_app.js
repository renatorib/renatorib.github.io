import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "~/style/themes/light";
import GlobalStyle from "~/style/components/GlobalStyle";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
