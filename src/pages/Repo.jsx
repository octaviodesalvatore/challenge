import React, { useContext } from "react";
import RepoContext from "../context/RepoContext";

const Repo = () => {
  const { saveUrl } = useContext(RepoContext);
  return (
    <div>
      <h1>{saveUrl}</h1>
    </div>
  );
};

export default Repo;
