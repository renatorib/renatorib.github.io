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
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  background: #000;
                  color: #fff;
                  font-family: "Roboto Mono", monospace;
                  font-size: 16px;
                  height: 100vh;
                  overflow: hidden;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  justify-content: center;
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
