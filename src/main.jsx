import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import Api from "./Api/Api.jsx";
import { store } from "./ReduxStore/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <Api>
        <App />
      </Api>
    </Provider>
  </HashRouter>,
);
