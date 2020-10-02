import React from "react";
import { useTheme } from "emotion-theming";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import createElement from "react-syntax-highlighter/dist/cjs/create-element";
import parseLangOptions from "~/utils/prism/parse-lang-options";

const lineStyles = {
  padding: "0 1em"
};

const Pre = ({ children, className = "" }) => {
  const theme = useTheme();
  const parsed = parseLangOptions(className.replace("language-", ""));

  const {
    lang,
    highlightLines,
    props: { start = 1, focus = false, lines = false }
  } = parsed;

  return (
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
                  ...lineStyles,
                  opacity: 1
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
                style={{ ...lineStyles, opacity: focus ? 0.15 : 0.35 }}
                key={`code-segment${i}`}
              >
                {line({ useInlineStyles: !focus })}
              </div>
            );
          }

          return (
            <div key={`code-segment${i}`} style={lineStyles}>
              {line()}
            </div>
          );
        });
      }}
    >
      {children.slice(0, -1)}
    </SyntaxHighlighter>
  );
};

export default Pre;
