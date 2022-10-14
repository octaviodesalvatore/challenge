import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/user/:login" component={User} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
