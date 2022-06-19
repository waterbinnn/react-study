import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import LandingPage from "./Toolbar/LandingPage";

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.querySelector("#root")
);
