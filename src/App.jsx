import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepoProvider from "./context/RepoProvider";

import Home from "./pages/Home";
import Repo from "./Components/Repo";

const App = () => {
  return (
    <>
      <RepoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo/:user" element={<Repo />} />
          </Routes>
        </BrowserRouter>
      </RepoProvider>
    </>
  );
};

export default App;
