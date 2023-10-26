import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";

const theme = {
  colors: {
    white: "#fff",
    bgColor: "#f1f3f5",
    textColor: "#050505",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
