import React, { useContext, useEffect } from "react";
import RepoContext from "../context/RepoContext";
import styled from "styled-components";

const Table = () => {
  const {
    content,
    updateUrl,
    setContentProps,
    setclickedComponent,
    currentUrl,
    getData,
  } = useContext(RepoContext);

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
          {content &&
            Array.isArray(content) &&
            content.map((contenido) => (
              <tr key={contenido.sha}>
                <td
                  className="file"
                  onClick={() => {
                    updateUrl(`${currentUrl}/${contenido.name}`);

                    if (contenido.type === "file") {
                      setContentProps(contenido);
                      setclickedComponent(true);
                    }
                  }}
                >
                  {contenido.path}
                </td>
                <td>{contenido.type}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  padding: 80px 0;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    text-align: left;
    tr {
      color: #ffffff;

      td {
        border: 1px solid #000000;
        padding: 10px;
        padding-right: 70px;
      }
    }

    .file {
      cursor: pointer;
      &:hover {
        background-color: #19202b;
      }
    }
  }
`;
