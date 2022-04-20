import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DogAPI from "./DogAPI";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DogAPI />
  </StrictMode>
);
