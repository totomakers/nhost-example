import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AppNhostProvider } from "./services/nhost/AppNhostProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppNhostProvider>
      <App />
    </AppNhostProvider>
  </React.StrictMode>
);
