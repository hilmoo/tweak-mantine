import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
import { generateScopedName } from "hash-css-selector";
import path from "path";

import pkg from "./package.json" with { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "esm/index.mjs",
      preserveModules: true,
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime", ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    postcss({
      modules: { generateScopedName },
      extract: "styles.css",
    }),
    nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    esbuild({
      target: "esnext",
    }),
  ],
};
