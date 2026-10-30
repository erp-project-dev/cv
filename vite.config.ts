import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" with { type: "json" };

// Relative base so the build works on GitHub Pages under /<repo>/ and locally.
export default defineConfig({
  plugins: [react()],
  base: "./",
  // Date of the last CV content review, shown on the page (not in the PDF).
  define: { __LAST_REVIEW__: JSON.stringify(pkg.lastReview) },
});
