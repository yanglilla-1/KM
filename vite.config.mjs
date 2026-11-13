import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const sourcePath = (name) => fileURLToPath(new URL(`./src/${name}`, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: Object.fromEntries(
      ["assets", "components", "examples", "pages", "App", "routes", "footer.routes"].map(
        (name) => [name, sourcePath(name)]
      )
    ),
  },
  build: { outDir: "build" },
  test: { environment: "node" },
});
