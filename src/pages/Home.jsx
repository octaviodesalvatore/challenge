import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

import RepoContext from "../context/RepoContext";

import styled from "styled-components";
import Search from "../Components/Search";

function Home() {
  const { setUrlFromHome } = useContext(RepoContext);
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hayRepos, setHayRepos] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      // console.log("no input value, haciendo el return");
      return;
    }
    setIsLoading(true);
    fetch(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);

  return (
    <HomeContainer repos={repos}>
      <Search setInputValue={setInputValue} />
      <ul>
        {isLoading && (
          <div>
            <p>Cargando...</p>
          </div>
        )}
        {error && (
          <div>
            <p>Ocurrio un error inesperado, pureba mas tarde!</p>
          </div>
        )}
        {repos &&
          repos.map((repo) => {
            return (
              <li key={repo.id}>
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
          })}
      </ul>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;
  height: ${(props) => (props.repos ? 10 : 100)}vh;

  transition: all 400ms ease-in;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  input {
    padding: 20px;
    font-size: 20px;
    width: 650px;
    border-radius: 10px;
    border: none;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.4);

    &:focus {
      outline: none;
    }
  }
  ul {
    list-style-type: none;
    text-decoration: none;
    background-color: #161b22;

    li {
      color: #8b949e;
      border: 1px solid #30363d;
      padding: 20px;
      margin-bottom: 20px;
      font-size: 18px;

      &:hover {
        background-color: #264064;
      }
    }
    a {
      text-decoration: none;
      color: #58a6ff;
      font-size: 28px;
      &:hover {
        color: #d1e5fc;
      }
    }
  }
`;

export default Home;
