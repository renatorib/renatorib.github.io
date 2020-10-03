import { css } from "emotion";
import React, { useState, useRef, useEffect } from "react";

const lexerClass = css`
  width: 100%;
  max-width: 820px;
  border-radius: 5px;
  overflow: hidden;
  background: black;
  color: white;
  margin: 2em auto;
  font-family: "Roboto", sans-serif;

  & .input {
    height: 40px;
    background: #222;

    & input {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      color: #999;
      font-size: 16px;
      text-align: center;
    }
  }

  & .box {
    display: flex;
    > * {
      margin-right: 5px;
    }

    & h3 {
      width: 100%;
      margin: 0;
      padding: 5px;
      font-size: 9px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #444;
    }
  }

  & .actions {
    width: 25%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    & button {
      border: none;
      border-radius: 3px;
      cursor: pointer;
      margin: 2px;
      padding: 7px 15px;
      opacity: 0.85;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        opacity: 1;
      }

      &.primary {
        background: #fff;
        color: black;
      }

      &.secondary {
        border: 2px solid #444;
        background: transparent;
        color: #999;

        &:hover {
          border-color: #777;
        }
      }
    }
  }

  & .canvas {
    width: 75%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .pregroup {
      font-size: 0px;
    }

    & .pregroup pre {
      margin: 0;
      display: inline-block;
      font-size: 18px;
      font-family: monospace;

      &.past {
        opacity: 0.2;
        text-decoration: line-through;
      }
      &.current {
        color: lime;
        text-decoration: underline;
      }
      &.pointer {
        padding: 3px 7px;
        transform: translateX(-50%) translateX(3.5px);
        border-radius: 99px;
        background: #333;
        color: white;
        font-size: 10px;
      }
    }
  }

  & .tokens,
  & .logs {
    & ul {
      height: 250px;
      list-style: none;
      margin: 0;
      margin-bottom: 5px;
      padding: 0;
      overflow: auto;
    }
  }

  & .tokens {
    width: 25%;

    & ul {
      padding: 0 5px;
    }
    & ul li {
      font-size: 14px;
      border-radius: 4px;
      overflow: hidden;
      background: #222;
      color: black;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      opacity: 0.5;

      & span {
        color: #999;
        padding: 4px 8px;
        display: block;
      }

      & span:nth-child(2) {
        background: #444;
        color: #eee;
      }
    }
  }

  & .logs {
    width: 75%;

    & ul li {
      transition: opacity 200ms ease;
      display: flex;
      font-size: 12px;
      padding: 5px 10px;

      &:nth-child(even) {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    & ul:hover li {
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }

    & ul li pre {
      margin: 0;
      font-family: "Roboto", sans-serif;
      display: inline-block;

      &.mono {
        font-family: "monospace";
      }

      &.pointer {
        color: rgba(255, 255, 255, 0.15);
      }

      &[data-nosel-text]:before {
        content: attr(data-nosel-text);
      }
    }
  }

  & *::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 5px;
  }

  & *::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const fill = (n, char) => (n > 0 ? `${char}${fill(n - 1, char)}` : "");
const leftPad = (str, n, char = " ") =>
  `${fill(n - str.toString().length, char)}${str}`;

const useLexerStepper = () => {
  const [input, _setInput] = useState("(5 + 2) * 10");
  const [pointer, setPointer] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [logs, setLogs] = useState([]);
  const [isDone, setDone] = useState(false);

  // We only need this to work step-by-step
  // We used to do a recursive fn
  const [readingNumber, setReadingNumber] = useState(false);
  const [numberBuffer, setNumberBuffer] = useState("");

  const readChar = () => input[pointer];
  const advance = () => setPointer(p => p + 1);
  const addToken = obj => setTokens(t => [...t, obj]);
  const done = () => setDone(true);

  const describe = (message, { at = pointer, level = 0, color } = {}) => {
    return setLogs(l => [...l, { message, at, level, color }]);
  };

  const readNumber = () => {
    const char = readChar();

    if (/[0-9]/.test(char)) {
      describe(`Found '${char}', add to lookup buffer, move pointer.`, {
        level: 1
      });

      setNumberBuffer(`${numberBuffer}${char}`);
      setReadingNumber(true);
      return advance();
    }

    const value = numberBuffer;

    let charText = `'${char}'`;
    if (char === " ") charText = "whitespace";
    describe(`Found ${charText}, a non-digit, break number lookup.`, {
      level: 1
    });

    describe(`Add '${value}' Number token.`, {
      level: 2,
      color: "lime"
    });

    addToken({ type: "Number", value });
    setNumberBuffer("");
    setReadingNumber(false);
  };

  const lexerStep = () => {
    const char = readChar();

    if (char === " ") {
      describe("Found whitespace, do nothing, move pointer.");
      return advance();
    }

    if (char === "+") {
      describe("Found '+', add Plus token, move pointer.", {
        color: "lime "
      });
      addToken({ type: "Plus", value: "+" });
      return advance();
    }

    if (char === "-") {
      describe("Found '-', add Minus token, move pointer.", {
        color: "lime "
      });
      addToken({ type: "Minus", value: "-" });
      return advance();
    }

    if (char === "*") {
      describe("Found '*', add Star token, move pointer.", {
        color: "lime "
      });
      addToken({ type: "Star", value: "*" });
      return advance();
    }

    if (char === "/") {
      describe("Found '/', add Slash token, move pointer.", {
        color: "lime "
      });
      addToken({ type: "Slash", value: "/" });
      return advance();
    }

    if (char === "(") {
      describe("Found '(', add LeftParen token, move pointer.", {
        color: "lime "
      });
      addToken({ type: "LeftParen", value: "(" });
      return advance();
    }

    if (char === ")") {
      describe("Found ')', add RightParen token, move pointer.", {
        color: "lime "
      });
      addToken({ type: "RightParen", value: ")" });
      return advance();
    }

    if (/[0-9]/.test(char)) {
      describe(`Found '${char}', a 0-9 digit, init number lookup.`);
      return readNumber();
    }

    if (char === undefined) {
      describe(`Found undefined, finish.`, { color: "#78ACFB" });
      return done();
    }

    describe(`Unknown char '${char}', should throw error, move pointer.`, {
      color: "red"
    });
    return advance();
  };

  const onNext = () => {
    if (readingNumber) {
      readNumber();
    } else {
      lexerStep();
    }
  };

  const onReset = () => {
    setPointer(0);
    setTokens([]);
    setLogs([]);
    setDone(false);
    setReadingNumber(false);
    setNumberBuffer("");
  };

  const setInput = newInput => {
    onReset();
    _setInput(newInput);
  };

  return {
    onNext,
    onReset,
    pointer,
    input,
    setInput,
    logs,
    done,
    tokens,
    isDone
  };
};

const Lexer = () => {
  const logsRef = useRef(null);
  const tokensRef = useRef(null);
  const {
    input,
    setInput,
    pointer,
    logs,
    tokens,
    isDone,
    onNext,
    onReset
  } = useLexerStepper();

  // Scroll logs to bottom when updated
  useEffect(() => {
    if (logsRef && logsRef.current) {
      const $el = logsRef.current;
      $el.scrollTop = $el.scrollHeight - $el.clientHeight;
    }
  }, [logs]);

  // Scroll tokens to bottom when updated
  useEffect(() => {
    if (tokensRef && tokensRef.current) {
      const $el = tokensRef.current;
      $el.scrollTop = $el.scrollHeight - $el.clientHeight;
    }
  }, [tokens]);

  return (
    <div className={lexerClass}>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div className="box">
        <div className="actions">
          <button className="primary" onClick={onNext} disabled={isDone}>
            Next →
          </button>
          <button className="secondary" onClick={onReset}>
            Reset ↺
          </button>
        </div>
        <div className="canvas">
          <div className="rails">
            <div className="pregroup">
              {input.split("").map((char, index) => (
                <pre
                  key={index}
                  className={
                    pointer > index
                      ? "past"
                      : pointer === index
                      ? "current"
                      : ""
                  }
                >
                  {char}
                </pre>
              ))}
            </div>
            <div className="pregroup">
              <pre>{fill(pointer, " ")}</pre>
              <pre>↑</pre>
            </div>
            <div className="pregroup">
              <pre>{fill(pointer, " ")}</pre>
              <pre className="pointer">{pointer}</pre>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="tokens">
          <h3>Tokens</h3>
          <ul ref={tokensRef}>
            {tokens.length > 0 &&
              tokens.map(({ type, value }, index) => (
                <li key={index}>
                  <span>{type}</span> {value && <span>{value}</span>}
                </li>
              ))}
          </ul>
        </div>
        <div className="logs">
          <h3>Instructions</h3>
          <ul ref={logsRef}>
            {logs.length > 0 &&
              logs.map(
                ({
                  at,
                  message,
                  level,
                  color = "rgba(255, 255, 255, 0.5)"
                }) => (
                  <li key={at + message + level}>
                    <pre
                      className="pointer mono"
                      data-nosel-text={`${leftPad(
                        at,
                        input.length.toString().length
                      )} `}
                    />
                    <pre
                      style={{ color }}
                      className="mono nosel"
                      data-nosel-text={`${fill(level * 2 - 1, " ")}${
                        level > 0 ? "↳" : ""
                      } `}
                    />
                    <pre style={{ color }}>{message}</pre>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lexer;
