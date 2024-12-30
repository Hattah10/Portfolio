import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "sonner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <Toaster
      className="mb-10 text-2xl"
      position="bottom-right"
      duration={10000}
      closeButton
    />
    <App />
  </React.StrictMode>
);
