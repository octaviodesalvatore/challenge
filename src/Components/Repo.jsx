import React, { useContext } from "react";
import File from "./File";
import RepoContext from "../context/RepoContext";
import Table from "./Table";
import ButtonBack from "./ButtonBack";
import styled from "styled-components";

const Repo = () => {
  const { clickedComponent, content } = useContext(RepoContext);

  return (
    <RepoContainer>
      <div>
        <ButtonBack />
      </div>
      {content && clickedComponent ? <File content={content} /> : <Table />}
    </RepoContainer>
  );
};

export default Repo;

const RepoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
