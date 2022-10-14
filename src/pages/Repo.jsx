import React, { useContext, useState, useEffect } from "react";
import RepoContext from "../context/RepoContext";

const Repo = () => {
  const { saveUrl } = useContext(RepoContext);

  const [content, setContent] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(`${saveUrl}/contents`);
  const [urlBefore, setUrlBefore] = useState("");

  const updateUrl = (url) => {
    setCurrentUrl(`${currentUrl}/${url}`);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContent(() => data);
      })
      .catch((err) => {
        // setIsLoading(false);
        // setError(true);
        console.error(err);
      });
  }, [currentUrl]);

  return (
    <>
      <button>volver</button>
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
                  updateUrl(contenido.path);
                  console.log("carpeta");
                } else if (contenido.type === "file") {
                  openInNewTab(`${contenido.download_url}`);
                  console.log("archivo");
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
    </>
  );
};

export default Repo;
