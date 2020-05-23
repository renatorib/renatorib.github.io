import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <meta
            name="google-site-verification"
            content="weNzQSO7j69_BGz5Ti7uV6cxSAOyrLWQZP7xySTHEx0"
          />
          <DefaultStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GoogleAnalytics id={"UA-68492464-1"} />
        </body>
      </html>
    );
  }
}

function GoogleAnalytics({ id }) {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${id}');
          `
        }}
      />
    </>
  );
}

function DefaultStyles() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|PT+Serif:400,400i,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css"
      />
    </>
  );
}
