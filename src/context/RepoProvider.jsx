import React, { useState, useEffect } from "react";

import { Provider } from "../context/RepoContext";

const RepoProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [urlFromHome, setUrlFromHome] = useState("");
  const [currentUrl, setCurrentUrl] = useState(`${urlFromHome}/contents`);
  const [contentProps, setContentProps] = useState();

  const [clickedComponent, setclickedComponent] = useState(false);

  console.log("1", urlFromHome);
  console.log("2", currentUrl);

  const updateUrl = (url) => {
    console.log("hola");
    setCurrentUrl(url);
  };

  const getData = () => {
    fetch(currentUrl, {
      headers: {
        Authorization: `${process.env.REACT_APP_GITHUB_API}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("URL DENTRO DEL FETCH", currentUrl);
  };

  useEffect(() => {
    getData();
  }, [currentUrl]);

  useEffect(() => {
    setCurrentUrl(`${urlFromHome}/contents`);
  }, [urlFromHome]);

  console.log("URL FUERA DEL FETCH", currentUrl);

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
      }}
    >
      {children}
    </Provider>
  );
};

export default RepoProvider;
