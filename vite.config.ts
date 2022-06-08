import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Radix UI Tooltip issue repro",
  version: "0.0.0",
  content_scripts: [
    {
      matches: ["https://example.com/*"],
      js: ["src/tooltip.tsx"],
    },
  ],
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
