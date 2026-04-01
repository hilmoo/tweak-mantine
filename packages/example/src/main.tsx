import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "@hilmo/tweak-mantine/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
