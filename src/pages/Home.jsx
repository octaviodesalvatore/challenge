import { useEffect, useContext } from "react";

import styled from "styled-components";
import Search from "../Components/Search";
import RepoItemList from "../Components/RepoItemList";
import RepoContext from "../context/RepoContext";

function Home() {
  const { repos, isLoading, error, setInputValue, fetchFromHome, inputValue } =
    useContext(RepoContext);

  useEffect(() => {
    fetchFromHome();
  }, [inputValue]);

  return (
    <HomeContainer repos={repos}>
      <Search setInputValue={setInputValue} />

      <ul>
        {isLoading && (
          <div>
            <p className="loading">Cargando...</p>
          </div>
        )}
        {error && (
          <div>
            <p>Ocurrio un error inesperado, pureba mas tarde!</p>
          </div>
        )}
        {repos &&
          repos.map((repo) => {
            return <RepoItemList repo={repo} key={repo.id} />;
          })}
      </ul>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;
  height: ${(props) => (props.repos ? 10 : 100)}vh;
  transition: all 400ms ease-in;
  .loading {
    color: #ffffff;
  }

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
    border: none;
    background: #ffffff;

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
