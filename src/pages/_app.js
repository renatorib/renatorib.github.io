import React from "react";
import App, { Container } from "next/app";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import createElement from "react-syntax-highlighter/dist/create-element";
import { MDXProvider } from "@mdx-js/tag";

import parseLangOptions from "~/utils/prism/parse-lang-options";

const LineRenderer = ({ children, tagName }) => children.map();

const Code = ({ children, className = "" }) => {
  const parsed = parseLangOptions(className.replace("language-", ""));

  const {
    lang,
    highlightLines,
    props: { start = 1, focus = false }
  } = parsed;

  return (
    <SyntaxHighlighter
      language={lang}
      showLineNumbers
      startingLineNumber={parseInt(start)}
      lineNumberStyle={{ opacity: "0.2" }}
      renderer={({ rows, stylesheet, useInlineStyles }) => {
        return rows.map((node, i) => {
          const line = (config = {}) =>
            createElement({
              node,
              stylesheet,
              useInlineStyles,
              key: `code-segement${i}`,
              ...config
            });

          if (highlightLines.includes(i + 1)) {
            return (
              <div
                style={{
                  opacity: 1,
                  background: "rgba(0, 0, 0, 0.04)"
                }}
                key={`code-segment${i}`}
              >
                {line()}
              </div>
            );
          }

          if (highlightLines.length > 0) {
            return (
              <div
                style={{ opacity: focus ? 0.3 : 0.8 }}
                key={`code-segment${i}`}
              >
                {line({ useInlineStyles: !focus })}
              </div>
            );
          }

          return line();
        });
      }}
    >
      {children.slice(0, -1)}
    </SyntaxHighlighter>
  );
};

export default class CustomApp extends App {
  render() {
    const { Component, pageProps, ...restProps } = this.props;

    return (
      <Container>
        <MDXProvider components={{ code: Code }}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    );
  }
}
