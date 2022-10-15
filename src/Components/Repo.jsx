import React, { useContext, useState, useEffect } from "react";
import File from "../File";
import RepoContext from "../context/RepoContext";
import Table from "./Table";

const Repo = () => {
  const {
    saveUrl,
    setCurrentUrl,
    currentUrl,
    clickedComponent,
    content,
    setclickedComponent,
  } = useContext(RepoContext);

  console.log("currentUrl fuera useEffect", currentUrl);
  return (
    <>
      <button
        onClick={() => {
          setTimeout(() => {
            setCurrentUrl(currentUrl.slice(0, currentUrl.lastIndexOf("/")));
            setclickedComponent(false);
          }, 2000);
        }}
      >
        volver
      </button>
      {clickedComponent ? <File content={content} /> : <Table />}
    </>
  );
};

export default Repo;
