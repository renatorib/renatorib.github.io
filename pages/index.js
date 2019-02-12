import React from "react";

export default () => (
  <div className="container">
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
        -webkit-transition: all 300ms ease;
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
        -webkit-transform: translate(0, 6px);
        transform: translate(0, 6px);
        -webkit-animation: blink 1s infinite;
        animation: blink 1s infinite;
      }

      @-webkit-keyframes blink {
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
  </div>
);
