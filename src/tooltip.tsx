import * as RadixPopper from "@radix-ui/react-popper";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const tooltip = document.createElement("div");
tooltip.id = "tooltip";
document.body.append(tooltip);

const App = () => (
  <RadixPopper.Root>
    <RadixPopper.Anchor>anchor</RadixPopper.Anchor>
    <RadixPopper.Content>content</RadixPopper.Content>
  </RadixPopper.Root>
);

createRoot(tooltip).render(
  <StrictMode>
    <App />
  </StrictMode>
);
