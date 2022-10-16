import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RepoContext from "../context/RepoContext";

const RepoItemList = ({ repo }) => {
  const { setUrlFromHome } = useContext(RepoContext);
  return (
    <li>
      <Link
        to={`repo/${repo.name}`}
        onClick={() => {
          setUrlFromHome(repo.url);
        }}
      >
        {repo.name}
      </Link>
      <p>{repo.description}</p>
    </li>
  );
};

export default RepoItemList;
