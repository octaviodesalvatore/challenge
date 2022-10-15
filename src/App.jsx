import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Repo from "./Repo";

import RepoProvider from "./context/RepoProvider";

const App = () => {
  return (
    <>
      <RepoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo/:user" element={<Repo />} />
            {/* <Route exact path="/user/:login" component={User} /> */}
            {/* <Route component={NotFound} /> */}
          </Routes>
        </BrowserRouter>
      </RepoProvider>
    </>
  );
};

export default App;
