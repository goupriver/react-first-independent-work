import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle, variables } from "./BaseStyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={variables}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
