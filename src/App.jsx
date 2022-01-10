import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/nav";

const App = () => (
  <BrowserRouter>
    <Container>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
