import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

const GA_TRACKING_ID = "UA-68492464-1";

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|PT+Serif:400,400i,700"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                *, *:after, *:before {
                  box-sizing: border-box;
                }

                body {
                  min-height: 100vh;
                  padding: 0;
                  margin: 0;
                  font-family: "PT Sans", sans-serif;
                }

                h1, h2, h3, h4, h5, h6 {
                  font-family: "PT Serif", serif;
                  font-weight: 100;
                }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </body>
      </html>
    );
  }
}
