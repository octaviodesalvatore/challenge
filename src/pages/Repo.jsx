import React, { useContext, useState, useEffect } from "react";
import RepoContext from "../context/RepoContext";

const Repo = () => {
  const { saveUrl } = useContext(RepoContext);

  const [content, setContent] = useState([]);
  console.log("hola");

  useEffect(() => {
    fetch(`${saveUrl}/contents`)
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
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>Nombre</th>
          <br />
          <th>Tipo</th>
        </tr>
        {content.map((contenido) => (
          <tr>
            <td>{contenido.path}</td>
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
