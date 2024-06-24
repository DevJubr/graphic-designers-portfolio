import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <Analytics />
    <App />
  </MantineProvider>
);
