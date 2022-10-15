import React, { useState, useEffect } from "react";

import { Provider } from "../context/RepoContext";

const RepoProvider = ({ children }) => {
  const [saveUrl, setSaveUrl] = useState("");
  const [content, setContent] = useState([]);
  const [urlFromHome, setUrlFromHome] = useState("");
  const [currentUrl, setCurrentUrl] = useState(`${urlFromHome}/contents`);
  const [contentProps, setContentProps] = useState();

  const [clickedComponent, setclickedComponent] = useState(false);

  const updateUrl = (url) => {
    setCurrentUrl(`${currentUrl}${url}`);
  };

  useEffect(() => {
    setCurrentUrl(`${urlFromHome}/contents`);
  }, [urlFromHome]);

  useEffect(() => {
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
  }, [currentUrl]);

  return (
    <Provider
      value={{
        setContent,
        saveUrl,
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
      }}
    >
      {children}
    </Provider>
  );
};

export default RepoProvider;
