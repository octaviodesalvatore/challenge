import React, { useContext, useState, useEffect } from "react";
import File from "./File";
import RepoContext from "../context/RepoContext";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Repo = () => {
  const navigate = useNavigate();
  const {
    currentUrl,
    clickedComponent,
    content,
    setclickedComponent,
    updateUrl,
    getData,
    urlFromHome,
  } = useContext(RepoContext);

  const checkUrl = (url) => {
    if (urlFromHome === url) {
      navigate("/");
      window.location.reload(false);
    }
  };

  return (
    <RepoContainer>
      <button
        onClick={() => {
          setclickedComponent(false);
          //no se llega actualizar
          let url = currentUrl.slice(0, currentUrl.lastIndexOf("/"));
          updateUrl(url);
          checkUrl(url);
        }}
      >
        volver
      </button>

      {content && clickedComponent ? <File content={content} /> : <Table />}
    </RepoContainer>
  );
};

export default Repo;

const RepoContainer = styled.div``;
