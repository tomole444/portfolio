import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WrappedApp } from "./App";
import "../src/language/i18n.jsx";
import OJ from "./assets/oliverj.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<img src={OJ} />}>
      <WrappedApp />
    </Suspense>
  </React.StrictMode>
);
