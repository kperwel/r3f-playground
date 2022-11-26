import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DrawMenu from "./Components/DrawMenu/DrawMenu";
import "./index.css";
import { Provider } from "./Store/useCards";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <div id="canvas-container">
        <DrawMenu />
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
