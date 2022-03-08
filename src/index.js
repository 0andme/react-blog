import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "style/color.css";
import "style/reset.css";
import reportWebVitals from "./reportWebVitals";
import Store from "store/Store";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);

reportWebVitals();
