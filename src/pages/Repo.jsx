import React, { useContext, useState, useEffect } from "react";
import RepoContext from "../context/RepoContext";

const Repo = () => {
  const { saveUrl } = useContext(RepoContext);

  const [content, setContent] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(`${saveUrl}/contents`);
  const [urlBefore, setUrlBefore] = useState("");

  console.log(atob(""));

  console.log(currentUrl);

  const updateUrl = (url) => {
    setCurrentUrl(`${currentUrl}${url}`);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  console.log(process.env.REACT_APP_GITHUB_API);
  useEffect(() => {
    fetch(currentUrl, {
      headers: {
        Authorization: `${process.env.REACT_APP_GITHUB_API}`,
      },
    })
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

  console.log("mi contenido", content);

  return (
    <>
      <button
        onClick={() => {
          setCurrentUrl(currentUrl.slice(0, currentUrl.lastIndexOf("/")));
          console.log(updateUrl);
        }}
      >
        volver
      </button>
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
