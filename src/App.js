// import './App.css';
import React from "react";
import Section from "./Section";
import Login from "./Login"
import "./App.css";
function App() {
  return (<>
          <Login className="split right"/>
          <Section className="split left"/>
    </>
  );
}

export default App;
