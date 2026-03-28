import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import Api from "./Api/Api.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Api>
      <App />
    </Api>
  </HashRouter>,
);
