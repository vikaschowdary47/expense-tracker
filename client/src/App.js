import React from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Container } from "react-bootstrap";
import { ExpensesProvider } from "./context/ExpensesContext";

function App() {
  return (
    <ExpensesProvider>
      <div className="app">
        <Container>
          <Nav />
          <Main />
        </Container>
      </div>
    </ExpensesProvider>
  );
}

export default App;
