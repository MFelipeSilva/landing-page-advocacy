import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import GlobalStyle from "./global";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
