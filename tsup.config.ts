import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: ["cjs", "esm", "iife"],
  minify: false, // Disable minification to prevent variable naming conflicts
  dts: true,
  legacyOutput: true,
  target: "es2020",
});
