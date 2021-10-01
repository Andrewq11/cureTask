import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Initial entry point of app
// Wrapping in HashRouter for github pages functionality 
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
