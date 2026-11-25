import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/site.js";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
