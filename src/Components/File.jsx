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
    min-width: 1000px;
    padding: 20px;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
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
  }
  img {
    width: 250px;
  }

  svg {
    width: 250px;
  }
`;
