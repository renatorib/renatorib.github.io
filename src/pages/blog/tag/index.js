import React from "react";
import Link from "next/link";
import { useTheme } from "emotion-theming";
import { Header } from "~/sections/Header";
import { Footer } from "~/sections/Footer";
import { Container } from "~/components/Container";
import SEO from "~/components/SEO";

import { getAllTags } from "~/data/posts";

const Tag = ({ slug }) => {
  const { bgBlockColor, titleColor, highlightColor } = useTheme();

  return (
    <>
      <SEO
        title={`${slug} - rena.to`}
        description="Renato Ribeiro, Software Engineer."
      />
      <Header />
      <Container>
        <div css={{ padding: "60px 0" }}>
          {getAllTags().map(tag => (
            <Link key={tag} href={`/blog/tag/${tag}`} passHref>
              <a
                css={{
                  padding: "4px 16px",
                  margin: "1px 2px",
                  border: `1px solid ${bgBlockColor}`,
                  borderRadius: 999,
                  transition: "all 200ms ease",
                  ":hover": {
                    color: titleColor,
                    borderColor: highlightColor
                  }
                }}
              >
                {tag}
              </a>
            </Link>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

Tag.getInitialProps = ctx => ({ slug: ctx.query.slug });

export default Tag;
