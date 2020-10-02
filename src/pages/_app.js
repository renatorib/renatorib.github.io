import React from "react";
import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import { AnimateSharedLayout } from "framer-motion";

import theme from "~/style/themes/light";
import GlobalStyle from "~/style/components/GlobalStyle";
import SEO from "~/components/SEO";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO
            title="@renatorib"
            description="Renato Ribeiro; Software Engineer."
          />
          <GlobalStyle />
          <AnimateSharedLayout>
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </>
      </ThemeProvider>
    );
  }
}
