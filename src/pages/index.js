import React from "react";
import { keyframes } from "@emotion/core";
import { Box, Flex } from "react-system";
import SEO from "~/components/SEO";

const blink = keyframes`
  0%,
  30%,
  100% {
    opacity: 1;
  }
  50%,
  80% {
    opacity: 0;
  }
`;

export default () => (
  <>
    <SEO title="rena.to" description="Renato Ribeiro, Software Engineer." />
    <Flex
      css={{
        fontFamily: "Roboto Mono, monospace",
        fontSize: 16,
        height: "100vh",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        background: "black"
      }}
    >
      <div>
        <Box p="10px" css={{ textAlign: "center" }}>
          <img
            css={{
              width: 120,
              borderRadius: 999,
              boxShadow: "0 0 0 2px green",
              border: "4px solid black"
            }}
            src="https://avatars0.githubusercontent.com/u/3277185"
          />
        </Box>
        <Box p="10px" css={{ textAlign: "center" }}>
          <h1 css={{ fontWeight: 300, margin: 0, padding: 0, fontSize: 0 }}>
            <span css={{ fontSize: 32, paddingRight: 1, color: "white" }}>
              Renato Rib
            </span>
            <span
              css={{
                display: "inline-block",
                position: "absolute",
                width: 2,
                height: 30,
                background: "green",
                transform: "translate(-1px, 3px)",
                animation: `${blink} 1s infinite`
              }}
            />
            <span css={{ fontSize: 32, paddingLeft: 1, color: "#555555" }}>
              eiro
            </span>
          </h1>

          <div className="sub">software engineer</div>

          <ul className="links">
            <li className="github">
              <a
                href="http://github.com/renatorib"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li className="twitter">
              <a
                href="http://twitter.com/renatorib_"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </li>
            <li className="linkedin">
              <a
                href="http://linkedin.com/in/renatorib"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li>
          </ul>
        </Box>
      </div>

      <style jsx>{`
        .sub {
          padding-top: 5px;
          color: #555;
        }

        .center {
          text-align: center;
          font-weight: 300;
        }

        .links {
          list-style: none;
          font-size: 0;
          font-weight: 400;
          color: white;
          width: 100%;
          max-width: 230px;
          padding: 0;
          margin: 0 auto;
          margin-top: 30px;
          border-top: 2px solid #111;
        }
        .links li {
          display: inline-block;
          padding: 0;
          font-size: 12px;
        }
        .links li a {
          display: inline-block;
          text-decoration: none;
          color: #ddd;
          transition: all 300ms ease;
          padding: 30px 10px;
        }
        .links:hover li a {
          color: #333;
        }
        .links li a:hover {
          color: #00ff00;
          transform: translateY(-3px);
        }
      `}</style>
    </Flex>
  </>
);
