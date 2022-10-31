import React, { useContext } from "react";
import RepoContext from "../context/RepoContext";
import styled from "styled-components";

const Table = () => {
  const {
    content,
    updateUrl,
    setContentProps,
    setclickedComponent,
    currentUrl,
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
            content.map((cont) => (
              <tr key={cont.sha}>
                <td
                  className="file"
                  onClick={() => {
                    updateUrl(`${currentUrl}/${cont.name}`);

                    if (cont.type === "file") {
                      setContentProps(cont);
                      setclickedComponent(true);
                    }
                  }}
                >
                  {cont.path}
                </td>
                <td>{cont.type}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    text-align: left;

    tr {
      color: #ffffff;

      td {
        border: 1px solid #827993;
        padding: 10px;
        padding-right: 70px;
        border-radius: 5px;
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
