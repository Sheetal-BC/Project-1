import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Pages/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
