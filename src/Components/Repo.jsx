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
      <div className="RepoBox">
        <ButtonBack />
        {content && clickedComponent ? <File content={content} /> : <Table />}
      </div>
    </RepoContainer>
  );
};

export default Repo;

const RepoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;

  @media (max-width: 500px) {
    padding: 20px 0;
  }

  @media only screen and (max-width: 786px) and (min-width: 500px) {
    padding: 20px 0;
  }

  .RepoBox {
    display: flex;
    align-items: flex-start;
    @media (max-width: 500px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 786px) and (min-width: 500px) {
      flex-direction: column;
    }
  }
`;
