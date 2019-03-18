import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import createElement from "react-syntax-highlighter/dist/create-element";
// import { dark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MDXProvider } from "@mdx-js/tag";

import parseLangOptions from "@/utils/prism/parse-lang-options";

const LineRenderer = ({ children, tagName }) => children.map();

const Code = ({ children, className = "" }) => {
  const parsed = parseLangOptions(className.replace("language-", ""));
  console.log(parsed);

  const {
    lang,
    highlightLines,
    props: { start }
  } = parsed;

  return (
    <SyntaxHighlighter
      language={lang}
      showLineNumbers
      startingLineNumber={start ? parseInt(start) : 0}
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
              <div style={{ opacity: 1, background: "rgba(0, 0, 0, 0.02)" }}>
                {line()}
              </div>
            );
          }

          if (highlightLines.length > 0) {
            return (
              <div style={{ opacity: 0.3 }}>
                {line({ useInlineStyles: false })}
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

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={{ code: Code }}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};
