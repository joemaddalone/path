import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: ["cjs", "esm", "iife"],
  minify: true,
  dts: true,
  legacyOutput: true,
  target: "es2020",
});
