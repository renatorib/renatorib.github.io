import React from "react";

const Paragraph = ({ children }) => (
  <>
    <p>{children}</p>

    <style jsx>{`
      p {
        font-size: 20px;
        line-height: 1.5em;
        letter-spacing: 0.1px;
        font-weight: 400;
      }
    `}</style>
  </>
);

export default Paragraph;
