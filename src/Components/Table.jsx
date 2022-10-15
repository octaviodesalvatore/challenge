import React, { useContext, useEffect } from "react";
import RepoContext from "../context/RepoContext";

const Table = () => {
  const {
    saveUrl,
    setCurrentUrl,
    currentUrl,
    clickedComponent,
    content,
    updateUrl,
    setContentProps,
    setclickedComponent,
    setContent,
  } = useContext(RepoContext);

  return (
    <table>
      <tr>
        <th>Nombre</th>
        <br />
        <th>Tipo</th>
      </tr>
      {content.map((contenido) => (
        <tr>
          <td
            onClick={() => {
              if (contenido.type === "dir") {
                updateUrl(`/${contenido.name}`);
              } else if (contenido.type === "file") {
                updateUrl(`/${contenido.name}`);
                setContentProps(contenido);
                setclickedComponent(true);
              }
            }}
          >
            {contenido.path}
          </td>
          <br />
          <br />
          <td>{contenido.type}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
