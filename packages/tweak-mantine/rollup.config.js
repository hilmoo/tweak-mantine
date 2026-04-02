import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
import { generateScopedName } from "hash-css-selector";
import path from "node:path";

export default {
  input: [
    "src/index.ts",
    "src/ext/charts/theme.ts",
    "src/ext/code-highlight/theme.ts",
    "src/ext/dates/theme.ts",
    "src/ext/dropzone/theme.ts",
    "src/ext/spotlight/theme.ts",
    "src/ext/tiptap/theme.ts",
    "src/ext/schedule/theme.ts",
  ],
  output: [
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "esm/[name].mjs",
      chunkFileNames: "esm/chunks/[name]-[hash].mjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: false,
    },
  ],
  external(id) {
    return !id.startsWith(".") && !path.isAbsolute(id);
  },
  onwarn(warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE" && warning.message.includes('"use client"')) {
      return;
    }
    warn(warning);
  },
  plugins: [
    postcss({
      modules: { generateScopedName },
    }),
    nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    esbuild({
      target: "esnext",
    }),
  ],
};
