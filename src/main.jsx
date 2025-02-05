import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MainSide from "./components/MainSide.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="wrapper flex">
      <App />
      <MainSide />
    </div>
  </BrowserRouter>
);
