import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep the deployment base aligned with the GitHub Pages repository name.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
