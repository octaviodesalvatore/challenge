import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

import RepoContext from "../context/RepoContext";

// import "../../App.css";

//https://api.github.com/search/repositories?q=html
function Home() {
  const { setUrlFromHome } = useContext(RepoContext);
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(e.target.query.value);
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="Search Github Repositories"
        />
      </form>
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
        {repos.map((repo) => {
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
    </div>
  );
}

export default Home;
