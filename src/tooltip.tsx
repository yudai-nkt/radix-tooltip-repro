import * as RadixTooltip from "@radix-ui/react-tooltip";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const tooltip = document.createElement("div");
tooltip.id = "tooltip";
document.body.append(tooltip);

const App = () => (
  <RadixTooltip.Root open>
    <RadixTooltip.Trigger>Trigger</RadixTooltip.Trigger>
    <RadixTooltip.Content>Content</RadixTooltip.Content>
  </RadixTooltip.Root>
);

createRoot(tooltip).render(
  <StrictMode>
    <App />
  </StrictMode>
);
