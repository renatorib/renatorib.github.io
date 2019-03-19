import React from "react";

const Paragraph = ({ children }) => (
  <>
    <code>{children}</code>

    <style jsx>{`
      code {
        font-size: 0.8em;
      }
    `}</style>
  </>
);

export default Paragraph;
