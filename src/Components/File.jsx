import React from "react";
import styled from "styled-components";

const File = ({ content }) => {
  const fileVeri = (file) => {
    let name = file.name.toLowerCase();
    if (name.includes(".png") || name.includes(".jpg"))
      return <img src={`data:image/jpeg;base64, ${file.content}`} />;

    if (name.includes(".svg"))
      return <div dangerouslySetInnerHTML={{ __html: atob(file.content) }} />;

    return <code>{atob(`${content.content}`)}</code>;
  };

  return (
    <FileContainer>
      <div className="Filebox">
        <h3>{content.name}</h3>
        <p>{content.content && fileVeri(content)}</p>
      </div>
    </FileContainer>
  );
};

export default File;

const FileContainer = styled.div`
  .Filebox {
    background-color: #0d1117;
    padding: 20px;
    border-radius: 10px;
  }

  h3 {
    color: #ffffff;
    margin-bottom: 20px;
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
