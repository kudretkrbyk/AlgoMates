import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { store } from "./store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
