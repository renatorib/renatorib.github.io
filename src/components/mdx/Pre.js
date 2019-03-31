import React from "react";
import { ThemeConsumer } from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import createElement from "react-syntax-highlighter/dist/create-element";
import parseLangOptions from "~/utils/prism/parse-lang-options";

const Code = ({ children, className = "" }) => {
  const parsed = parseLangOptions(className.replace("language-", ""));

  const {
    lang,
    highlightLines,
    props: { start = 1, focus = false, lines = false }
  } = parsed;

  return (
    <ThemeConsumer>
      {theme => (
        <SyntaxHighlighter
          style={theme.prism}
          language={lang}
          showLineNumbers={lines}
          startingLineNumber={parseInt(start, 10)}
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
                      background: !focus
                        ? "rgba(255, 255, 255, 0.03)"
                        : "transparent"
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
      )}
    </ThemeConsumer>
  );
};

export default Code;
