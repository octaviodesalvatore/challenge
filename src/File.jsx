import React from "react";

const File = ({ content }) => {
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
    <div>
      <p style={{ fontSize: 12 }}>{content.url}</p>
      <p>{content.content && fileVeri(content)}</p>
    </div>
  );
};

export default File;
