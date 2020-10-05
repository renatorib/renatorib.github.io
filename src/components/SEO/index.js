import Head from "next/head";
import React from "react";
import favicon from "./favicon.png";

const SEO = ({ title, description, date }) => {
  const encTitle = encodeURIComponent(title);
  const encSubtitle = encodeURIComponent(description);
  const image = `https://ogimg.rena.to/image.png?title=${encTitle}&subtitle=${encSubtitle}&v=1`;

  return (
    <Head>
      {/* Common Tags */}
      {title && <title>{title}</title>}
      {date && <meta name="date" content={date} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twiter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@renatorib_" />
      <meta name="twitter:creator" content="@renatorib_" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Head>
  );
};

export default SEO;
