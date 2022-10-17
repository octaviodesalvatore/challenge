import React, { useState, useEffect } from "react";

import { Provider } from "../context/RepoContext";

const RepoProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [urlFromHome, setUrlFromHome] = useState("");
  const [currentUrl, setCurrentUrl] = useState(`${urlFromHome}/contents`);
  const [contentProps, setContentProps] = useState();

  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [clickedComponent, setclickedComponent] = useState(false);

  const updateUrl = (url) => {
    setCurrentUrl(url);
  };

  const getData = () => {
    fetch(currentUrl, {
      headers: {
        // Authorization: `${process.env.REACT_APP_GITHUB_API}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, [currentUrl]);

  useEffect(() => {
    setCurrentUrl(`${urlFromHome}/contents`);
  }, [urlFromHome]);

  const fetchFromHome = () => {
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
  };

  return (
    <Provider
      value={{
        setContent,
        currentUrl,
        setCurrentUrl,
        setclickedComponent,
        clickedComponent,
        content,
        setclickedComponent,
        setContentProps,
        contentProps,
        updateUrl,
        setUrlFromHome,
        getData,
        urlFromHome,
        fetchFromHome,
        setInputValue,
        repos,
        inputValue,
      }}
    >
      {children}
    </Provider>
  );
};

export default RepoProvider;
