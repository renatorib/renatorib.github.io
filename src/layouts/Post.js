import React from "react";
import SEO from "~/components/SEO";

const Post = ({ children, meta }) => (
  <div>
    <SEO {...meta} />
    <div
      style={{
        width: "100%",
        height: "800px",
        background: `url(${meta.image}) center center`,
        backgroundSize: `cover`
      }}
    />
    <div className="post-container">{children}</div>

    <style jsx>{`
      .post-container {
        max-width: 600px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Post;
