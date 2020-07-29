import React from "react";
import ReactDOM from "react-dom";
//import firebase from "./config/firebase";
import App from "./containers/pages/App";
//console.log(firebase);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
