import React from "react";

export const Heading1 = ({ children }) => (
  <>
    <h1>{children}</h1>

    <style jsx>{`
      h1 {
        font-size: 50px;
        font-weight: 100;
      }
    `}</style>
  </>
);

const HeadingWithAnchor = ({ tag: Tag, size, children }) => {
  const anchor = children
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/\./g, "");

  return (
    <>
      <Tag className="heading" id={anchor}>
        <a className="anchor" href={`#${anchor}`}>
          #
        </a>
        {children}
      </Tag>

      <style jsx>{`
        .heading {
          position: relative;
          font-size: ${size};
          font-weight: 100;
          font-style: italic;
        }

        .anchor {
          position: absolute;
          left: -26px;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.05);
          transition: color 300ms ease;
        }

        .heading:hover .anchor {
          color: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export const Heading2 = props => (
  <HeadingWithAnchor tag="h2" size="34px" {...props} />
);
export const Heading3 = props => (
  <HeadingWithAnchor tag="h3" size="30px" {...props} />
);
export const Heading4 = props => (
  <HeadingWithAnchor tag="h4" size="26px" {...props} />
);
export const Heading5 = props => (
  <HeadingWithAnchor tag="h5" size="21px" {...props} />
);
export const Heading6 = props => (
  <HeadingWithAnchor tag="h6" size="18px" {...props} />
);
