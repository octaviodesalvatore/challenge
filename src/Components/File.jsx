import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const File = ({ content }) => {
  const fileVeri = (file) => {
    let name = file.name.toLowerCase();
    if (name.includes(".png") || name.includes(".jpg"))
      return <img src={`data:image/jpeg;base64, ${file.content}`} />;

    if (name.includes(".svg"))
      return <div dangerouslySetInnerHTML={{ __html: atob(file.content) }} />;

    const decodeCode = atob(`${content.content}`);

    const languages = {
      ".js": "javascript",
      ".css": "css",
      ".html": "html",
    };

    return (
      <SyntaxHighlighter
        className="codeBox"
        language={languages[name.substring(name.lastIndexOf("."))]}
        style={atomOneDarkReasonable}
      >
        {decodeCode}
      </SyntaxHighlighter>
    );
  };

  return (
    <FileContainer>
      <h3>{content.name}</h3>
      <div className="Filebox">
        <p>{content.content && fileVeri(content)}</p>
      </div>
    </FileContainer>
  );
};

export default File;

const FileContainer = styled.div`
  .Filebox {
    background-color: #000000;
    padding: 20px;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;

    @media (min-width: 768px) {
      min-width: 768px;
    }

    @media (min-width: 1000px) {
      min-width: 1000px;
    }

    @media (max-width: 500px) {
      max-width: 320px;
      font-size: 20px;
    }

    @media only screen and (max-width: 786px) and (min-width: 500px) {
      max-width: 320px;
      font-size: 20px;
    }
  }

  .codeBox {
    background-color: #000000 !important;
  }

  h3 {
    color: #ffffff;
    background-color: #022833;
    font-weight: 900;
    padding: 20px;
    border-start-start-radius: 10px;
    border-start-end-radius: 10px;
  }
  p {
    color: #ffffff;
    font-size: 20px;
    @media (max-width: 500px) {
      font-size: 10px;
    }

    @media only screen and (max-width: 786px) and (min-width: 500px) {
      font-size: 11px;
    }
  }
  img {
    width: 250px;
  }

  svg {
    width: 250px;
  }
`;
