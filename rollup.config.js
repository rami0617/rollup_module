import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
    name: "myBundle",
    exports: "auto",
  },
  plugins: [typescript(), terser()],
};
