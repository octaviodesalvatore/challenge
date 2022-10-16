import React, { useContext } from "react";
import styled from "styled-components";
import RepoContext from "../context/RepoContext";

const File = ({ content }) => {
  const { setUrlFromHome, setInputValue } = useContext(RepoContext);
  const fileVeri = (file) => {
    // console.log("svg", atob(`${file.content}`));
    let name = file.name.toLowerCase();
    if (name.includes(".png") || name.includes(".jpg"))
      return <img src={`data:image/jpeg;base64, ${file.content}`} />;

    if (name.includes(".svg"))
      return <div dangerouslySetInnerHTML={{ __html: atob(file.content) }} />;

    return <code>{atob(`${content.content}`)}</code>;
  };

  return (
    <FileContainer>
      <p>{content.content && fileVeri(content)}</p>
    </FileContainer>
  );
};

export default File;

const FileContainer = styled.div`
  display: flex;
  padding: 10%;
  justify-content: center;
  align-items: center;
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
