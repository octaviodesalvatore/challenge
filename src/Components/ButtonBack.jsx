import React, { useContext } from "react";
import styled from "styled-components";
import RepoContext from "../context/RepoContext";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  const { currentUrl, setclickedComponent, updateUrl, urlFromHome } =
    useContext(RepoContext);

  const checkUrl = (url) => {
    if (urlFromHome === url) {
      navigate("/");
      window.location.reload(false);
    }
  };

  return (
    <ButtonB
      onClick={() => {
        setclickedComponent(false);
        //no se llega actualizar
        let url = currentUrl.slice(0, currentUrl.lastIndexOf("/"));
        updateUrl(url);
        checkUrl(url);
      }}
    >
      Back
    </ButtonB>
  );
};

export default ButtonBack;

const ButtonB = styled.button`
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0c0c0;
  }
`;
