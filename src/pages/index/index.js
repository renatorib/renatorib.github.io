import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;

export default () => (
  <Container>
    <div>
      <div className="center pic-block">
        <img
          className="profile-pic"
          src="https://avatars0.githubusercontent.com/u/3277185"
        />
      </div>
      <div className="center info-block">
        <h1>
          <span className="typed">Renato Rib</span>
          <span className="cursor" />
          <span className="autocomplete">eiro</span>
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
      </div>
    </div>

    <style jsx>{`
      .pic-block,
      .info-block {
        padding: 10px;
      }

      .profile-pic {
        width: 120px;
        border-radius: 999px;

        box-shadow: 0 0 0 2px green;
        border: 4px solid black;
      }

      h1 {
        font-weight: 300;
        margin: 0;
        padding: 0;
        font-size: 0;
      }

      h1 span {
        font-size: 32px;
      }

      h1 .typed {
        padding-right: 1px;
        color: white;
      }

      h1 .autocomplete {
        color: #555;
        padding-left: 1px;
      }

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

      .cursor {
        display: inline-block;
        position: absolute;
        width: 2px;
        height: 30px;
        background: green;
        transform: translate(-1px, 3px);
        animation: blink 1s infinite;
      }

      @keyframes blink {
        0%,
        30%,
        100% {
          opacity: 1;
        }
        50%,
        80% {
          opacity: 0;
        }
      }
    `}</style>
  </Container>
);
