import React, { useState } from "react";

import { Provider } from "../context/RepoContext";

const RepoProvider = ({ children }) => {
  const [saveUrl, setSaveUrl] = useState("");

  const getUrl = (url) => {
    setSaveUrl(url);
  };

  return <Provider value={{ getUrl, saveUrl }}>{children}</Provider>;
};

export default RepoProvider;
