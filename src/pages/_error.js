import React from "react";
import Link from "next/link";
import { Header } from "~/sections/Header";
import { Container } from "~/components/Container";
import img404 from "~/images/404.png";
import * as mdx from "~/components/mdx";
import SEO from "~/components/SEO";

const Error = () => (
  <>
    <SEO title="404 - rena.to" description="You found nothing" />
    <Header />
    <Container>
      <div
        css={{
          height: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 20px"
        }}
      >
        <div css={{ maxWidth: "200px" }}>
          <img src={img404} css={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <div css={{ marginTop: 20, textAlign: "center" }}>
          <mdx.h2 noAnchor>You found nothing</mdx.h2>
          <Link href="/" passHref>
            <mdx.a>← Back to home</mdx.a>
          </Link>
        </div>
      </div>
    </Container>
  </>
);

export default Error;
