import Head from "next/head";
import React from "react";

const SEO = ({ title, description, image }) => (
  <Head>
    {/* Common Tags */}
    {title && <title>{title}</title>}

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
  </Head>
);

export default SEO;
