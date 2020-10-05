import React from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <Container>
        <Nav />
        <Main />
      </Container>
    </div>
  );
}

export default App;
