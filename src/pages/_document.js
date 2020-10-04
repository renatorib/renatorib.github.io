import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { extractCritical } from "emotion-server";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      )
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
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
